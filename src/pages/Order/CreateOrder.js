import React, { useContext, useEffect } from "react";
import { Box, Card, Grid, Typography, IconButton } from "@mui/material";
import NavBar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import OrderContext from "../../frontendApis/order";
import TableContext from "../../frontendApis/table";
import OrderItem from "./OrderItem";
import TableDropdown from "../Reservation/TableDropdown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ActionButton from "../../components/ActionButton";

const CreateOrder = () => {
  const {
    loading,
    getRecipes,
    recipes,
    orderItems,
    setOrderItems,
    getTotalCost,
    createOrder,
    totalCost,
  } = useContext(OrderContext);

  const { tableNumber, setTableNumber } = useContext(TableContext);

  const create = () => {
    createOrder(tableNumber);
    setTableNumber(-1);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    getTotalCost();
  }, [orderItems]);

  const renderRecipeCards = () => {
    return recipes.map((recipe, idx) => {
      return (
        <Grid item>
          <OrderItem
            recipeId={recipe.id}
            name={recipe.name}
            imageUrl={recipe.image.imageUrl}
            price={recipe.price}
            description={recipe.desc}
            steps={recipe.steps}
            ingredients={recipe.ingredients}
          />
        </Grid>
      );
    });
  };

  const renderOrderCards = () => {
    return orderItems.map((orderItem) => {
      const incrementQty = () => {
        const newState = orderItems.map((obj) => {
          if (obj.menuItemId === orderItem.menuItemId) {
            return { ...obj, qty: orderItem.qty + 1 };
          }
          return obj;
        });
        setOrderItems(newState);
      };

      const decrementQty = () => {
        const newState = orderItems
          .map((obj) => {
            if (obj.menuItemId === orderItem.menuItemId) {
              return { ...obj, qty: orderItem.qty - 1 };
            }
            return obj;
          })
          .filter((obj) => obj.qty > 0);
        setOrderItems(newState);
      };
      return (
        <Grid item>
          <Card
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: 6,
              padding: "14px",
              mb: "23px",
            }}
          >
            <Grid
              container
              sx={{
                backgroundColor: "secondary.main",
                borderRadius: 6,
                gap: 3,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                }}
              >
                <img src={orderItem.imageUrl} style={{ width: "100%" }}></img>
              </Box>
              <Grid container direction="column" sx={{ width: "60%", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontWeight: 700 }}
                >
                  {orderItem.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "secondary.contrastText", fontWeight: 700 }}
                >
                  ${orderItem.price.toFixed(2)}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    gap: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      type: "submit",
                      backgroundColor: "primary.light",
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "secondary.light",
                      },
                    }}
                    onClick={decrementQty}
                  >
                    <RemoveIcon
                      sx={{
                        color: "primary.contrastText",
                      }}
                    />
                  </IconButton>
                  <Typography
                    display="flex"
                    alignItems="center"
                    sx={{ color: "primary.contrastText" }}
                  >
                    {orderItem.qty}
                  </Typography>
                  <IconButton
                    sx={{
                      type: "submit",
                      backgroundColor: "primary.light",
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "secondary.light",
                      },
                    }}
                    onClick={incrementQty}
                  >
                    <AddIcon sx={{ color: "primary.contrastText" }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <>
      {!loading && (
        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "secondary.main",
            height: "100vh",
          }}
        >
          <NavBar />
          <Grid container direction="column" sx={{ flexGrow: "1" }}>
            <Grid container direction="row" sx={{ height: "100%" }}>
              <Grid
                container
                direction="column"
                sx={{ pt: "11px", flex: "3", width: "80%" }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent={"space-between"}
                  sx={{ padding: "0px 56px" }}
                >
                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "primary.contrastText",
                      alignSelf: "center",
                    }}
                  >
                    Create Order
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "primary.contrastText" }}
                    >
                      Table No.
                    </Typography>
                    <TableDropdown />
                  </Box>
                </Grid>
                <Grid
                  container
                  direction="row"
                  columnGap={5}
                  sx={{
                    width: "65em",
                    height: "33em",
                    backgroundColor: "primary.main",
                    mt: "14px",
                    borderRadius: "10px",
                    gap: "60px",
                    padding: "43px 43px",
                    overflow: "auto",
                    alignSelf: "center",
                  }}
                >
                  {renderRecipeCards()}
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  flex: "1",
                  backgroundColor: "primary.main",
                  padding: "38px 34px",
                }}
              >
                {orderItems.length !== 0 ? (
                  <Grid container direction="column" sx={{ gap: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "primary.contrastText" }}
                    >
                      Order Items
                    </Typography>
                    <Grid
                      item
                      sx={{
                        width: "100%",
                        height: "25em",
                        backgroundColor: "primary.main",
                        borderRadius: "10px",
                        overflow: "auto",
                        alignSelf: "center",
                        flexGrow: 1,
                      }}
                    >
                      {renderOrderCards()}
                    </Grid>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="subtitle1" sx={{ color: "#A9A9A9" }}>
                        Total Amount:
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: "primary.contrastText" }}
                      >
                        CAD${totalCost}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        justifySelf: "flex-end",
                      }}
                    >
                      <ActionButton
                        onClick={() => console.log("edit")}
                        bgHover="secondary.light"
                        colorHover="#3D3C3A"
                        bgColor="transparent"
                        color="primary.light"
                        sx={{
                          width: "140px",
                          height: "48px",
                          padding: "0px",
                          margin: "0px",
                          border: 2,
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        Cancel
                      </ActionButton>
                      <ActionButton
                        onClick={() => create()}
                        bgColor="primary.light"
                        bgHover="secondary.light"
                        sx={{
                          width: "192px",
                          height: "48px",
                          padding: "0px",
                          margin: "0px",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        Submit Order
                      </ActionButton>
                    </Box>
                  </Grid>
                ) : (
                  <Grid
                    container
                    direction="column"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "19px 15px 34px 15px",
                    }}
                  >
                    <img src="/viewRecipe.svg"></img>
                    <Typography
                      variant="h6"
                      sx={{ color: "secondary.contrastText" }}
                    >
                      Your order is empty!
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "secondary.contrastText" }}
                    >
                      Click on a dish to add it to the order.
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CreateOrder;

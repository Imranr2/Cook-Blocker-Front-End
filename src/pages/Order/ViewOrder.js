import React from "react";
import NavBar from "../../components/Navbar";
import {
  Typography,
  Card,
  Grid,
  IconButton,
  Button,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import OrderContext from "../../frontendApis/order";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import parseDateTime from "../../utils/dateTimeParser";

const ViewOrder = () => {
  const { loading, getOrders, orders, deleteOrder, completeOrder, refresh } =
    useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    getOrders();
  }, [refresh]);

  const renderOrderCards = () => {
    return orders.map((order, idx) => {
      if (order.isCompleted) return;
      const orderItems = order.orderItems;
      const generate = () => {
        return orderItems.map((orderItem, idx) => (
          <ListItem key={idx} sx={{ padding: "0px", display: "list-item" }}>
            <ListItemText
              primary={orderItem.qty + "x " + orderItem.menuItem.name}
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#3D3C3A",
              }}
            />
          </ListItem>
        ));
      };
      return (
        <Grid>
          <Card
            elevation={0}
            sx={{
              width: "80%",
              borderRadius: "8px",
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "center",
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "0",
                  color: "secondary.contrastText",
                }}
                onClick={() => deleteOrder(order.id)}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ alignSelf: "flex-start" }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#3D3C3A" }}
                >
                  Order #{order.id}
                </Typography>
                <Typography
                  sx={{ fontSize: "10px", fontWeight: 700, color: "#A9A9A9" }}
                >
                  {parseDateTime(order.createdAt)}
                </Typography>
              </Grid>
              <List disablePadding sx={{ listStyleType: "disc", pl: 2 }}>
                {generate()}
              </List>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "secondary.contrastText",
                }}
              >
                Table No.: {order.tableNumber}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                justifyContent: "center",
                backgroundColor: "#287B2B",
                borderRadius: "0px",
                textTransform: "none",
              }}
              onClick={() => completeOrder(order.id)}
            >
              Mark Order as Completed
            </Button>
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
            <Grid
              container
              direction="column"
              sx={{ pt: "20px", flex: "3", width: "100%" }}
            >
              <Grid container direction="row" sx={{ padding: "0px 56px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.contrastText",
                    alignSelf: "flex-start",
                  }}
                >
                  All Orders
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                sx={{
                  height: "70vh",
                  overflow: "auto",
                  rowGap: "10px",
                  columnGap: "30px",
                  alignSelf: "center",
                  padding: "0px 56px",
                  mt: "44px",
                }}
              >
                {renderOrderCards()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ViewOrder;

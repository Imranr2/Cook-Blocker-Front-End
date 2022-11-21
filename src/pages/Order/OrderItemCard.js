import { Typography } from "@material-ui/core";
import { Box, Card, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useContext } from "react";
import OrderContext from "../../frontendApis/order";

const OrderItemCard = ({ id, name, imageUrl, price, qty }) => {
  const { orderItems, setOrderItems } = useContext(OrderContext);

  const incrementQty = () => {
    const newState = orderItems.map((obj) => {
      if (obj.id === id) {
        return { ...obj, qty: qty + 1 };
      }
      return obj;
    });
    setOrderItems(newState);
  };

  const decrementQty = () => {
    const newState = orderItems
      .map((obj) => {
        if (obj.id === id) {
          return { ...obj, qty: qty - 1 };
        }
        return obj;
      })
      .filter((obj) => obj.qty > 0);
    setOrderItems(newState);
  };

  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: 6,
        padding: "14px",
      }}
    >
      <Grid
        container
        sx={{ backgroundColor: "secondary.main", borderRadius: 6, gap: 3 }}
      >
        <Box sx={{ width: "80px", height: "80px" }}>
          <img src={imageUrl} style={{ width: "100%" }}></img>
        </Box>
        <Grid item>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
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
                backgroundColor: "secondary.main",
                width: 30,
                height: 30,
                borderRadius: 2,
              }}
              onClick={decrementQty}
            >
              <RemoveIcon sx={{ color: "secondary.contrastText" }} />
            </IconButton>
            <Typography
              display="flex"
              alignItems="center"
              sx={{ color: "primary.contrastText" }}
            >
              {qty}
            </Typography>
            <IconButton
              sx={{
                type: "submit",
                backgroundColor: "secondary.main",
                width: 30,
                height: 30,
                borderRadius: 2,
              }}
              onClick={incrementQty}
            >
              <AddIcon sx={{ color: "secondary.contrastText" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderItemCard;

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ActionButton from "../../components/ActionButton";
import OrderContext from "../../frontendApis/order";
import { useEffect } from "react";
import { useTheme } from "styled-components";

const OrderItem = ({ id, name, imageUrl, price, description }) => {
  const { orderItems, setOrderItems } = useContext(OrderContext);

  const theme = useTheme();
  const addOrderItem = () => {
    for (var i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id == id) {
        return;
      }
    }
    setOrderItems([
      ...orderItems,
      {
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        qty: 1,
      },
    ]);
  };

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        border: "2px solid #3D3C3A",
        borderRadius: "6px",
      }}
    >
      <Grid
        container
        sx={{
          pl: "45px",
          pr: "45px",
          pt: "19px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <CardActionArea>
          <Box sx={{ width: "12em", height: "12em" }}>
            <img src={imageUrl} style={{ width: "100%" }} alt="Recipe"></img>
          </Box>
        </CardActionArea>
      </Grid>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.contrastText" }}>
          {String(description).slice(0, 35) + "..."}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "primary.contrastText" }}>
          {"CAD$" + price.toFixed(2)}
        </Typography>
        <ActionButton
          bgColor="primary.light"
          bgHover="secondary.light"
          sx={{
            width: "100px",
            padding: "2.75px 37.75px",
            mt: "10px",
          }}
          onClick={addOrderItem}
        >
          Add
        </ActionButton>
      </CardContent>
    </Card>
  );
};

export default OrderItem;

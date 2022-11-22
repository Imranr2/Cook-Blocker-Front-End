import { Typography } from "@material-ui/core";
import {
  Card,
  Grid,
  IconButton,
  Button,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const OrderCard = ({ id, orderItems, tableNo }) => {
  const generate = () => {
    return orderItems.map((orderItem, idx) => (
      <ListItem key={idx} sx={{ padding: "0px", display: "list-item" }}>
        <ListItemText
          primary={orderItem.qty + "x " + orderItem.menuItem.name}
        />
      </ListItem>
    ));
  };
  return (
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
            top: "0",
            right: "0",
            color: "primary.light",
          }}
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
          <Typography>Order #{id}</Typography>
        </Grid>
        <List disablePadding sx={{ listStyleType: "disc", pl: 2 }}>
          {generate()}
        </List>
        <Typography>Table No.: {tableNo}</Typography>
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
      >
        Mark Order as Completed
      </Button>
    </Card>
  );
};

export default OrderCard;

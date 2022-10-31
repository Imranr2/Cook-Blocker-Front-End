import React from "react";
import { Card } from "@mui/material";

const MenuCard = (props) => {
  return (
    <Card
      sx={{
        width: "508px",
        height: "452px",
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        borderRadius: "32px",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {props.children}
    </Card>
  );
};

export default MenuCard;

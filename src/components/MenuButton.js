import React from "react";
import { Button } from "@mui/material";

const MenuButton = (props) => {
  return (
    <Button
      component={props.component}
      onClick={props.onClick}
      variant="contained"
      disabled={props.disabled}
      disableElevation
      sx={{
        textTransform: "none",
        backgroundColor: "primary.light",
        "&:hover": {
          backgroundColor: "secondary.light",
        },
        width: "208px",
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default MenuButton;

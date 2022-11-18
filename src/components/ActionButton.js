import React from "react";
import { Button } from "@mui/material";

const ActionButton = (props) => {
  return (
    <Button
      component={props.component}
      onClick={props.onClick}
      variant="contained"
      disableElevation
      sx={{
        textTransform: "none",
        backgroundColor: props.bgColor,
        color: props.color,
        "&:hover": {
          backgroundColor: props.bgHover,
          color: props.colorHover,
          borderColor: props.bgHover,
        },
        width: props.width,
        padding: "0px",
        margin: "0px",
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};
//
export default ActionButton;

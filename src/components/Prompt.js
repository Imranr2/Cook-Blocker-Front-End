import React from "react";
import { Typography } from "@mui/material";

const Prompt = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        color: "primary.contrastText",
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "-10px",
      }}
    >
      What would you like to do today?
    </Typography>
  );
};

export default Prompt;

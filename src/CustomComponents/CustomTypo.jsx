import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  children,
  ...rest
}) {
  return (
    <>
      <Typography
        sx={rest}
      >
        {children}
      </Typography>
    </>
  );
}

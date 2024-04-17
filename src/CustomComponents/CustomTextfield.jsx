import React from 'react'
import { TextField } from "@mui/material";

export default function CustomTextfield({

  ...rest
}) {
  return (
    <>
      <TextField
        {...rest}
        InputProps={{
          style: {
            borderRadius: "4px",
            borderColor: "#E5E5E5",
            ...rest,
            backgroundColor: "#FFFFFF",
          }
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  )
}

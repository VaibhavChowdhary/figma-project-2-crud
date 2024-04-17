import React from 'react'
import { TextField } from "@mui/material";
const CustomTextfield = React.forwardRef(({ ...rest }, ref) => {
  return (
    <>
      <TextField
        ref={ref}
        {...rest}
        InputProps={{
          style: {
            borderRadius: "4px",
            borderColor: "#E5E5E5",
            backgroundColor: "#FFFFFF",
            ...rest.InputProps,
          }
        }}
        InputLabelProps={{
          shrink: true,
          ...rest.InputLabelProps,
        }}
      />
    </>
  )
});

export default CustomTextfield;
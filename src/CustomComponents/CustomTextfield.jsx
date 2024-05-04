import React from 'react'
import { TextField } from "@mui/material";

const CustomTextfield = React.forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <TextField
        ref={ref}
        {...rest}
        InputProps={{
          style: {
            borderRadius: "4px",
            borderColor: error ? "#dd3a25" : "#E5E5E5",
            backgroundColor: error ? "#F59184" : "#FFFFFF",
            color: error ? "#FFFFFF" : "#6C6C6C",
            '& .MuiFormHelperTextRoot': {
              color: "#F59184",
              lineHeight: '1em',
            },

            ...rest
          },
          ...rest
        }}

        InputLabelProps={{
          shrink: true,
          ...rest
        }}
        FormHelperTextProps={{
          style: {
            color: "#F59184",
          },
          ...rest
        }}
      />
    </>
  )
});

export default CustomTextfield;
import { Alert, Snackbar } from "@mui/material";

const CustomSnackbar = ({ open, onClose, type, children }) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
        <Alert
          onClose={onClose}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {children}
        </Alert>
      </Snackbar>
    </>
  )
};

export default CustomSnackbar

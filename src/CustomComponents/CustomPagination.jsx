import { Pagination } from "@mui/material";

const CustomPagination = ({ count, handlePageChange }) => {
  const handleChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <Pagination
      color="warning"
      count={count}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
};

export default CustomPagination

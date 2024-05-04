import { Pagination } from "@mui/material";

const CustomPagination = ({ count, handlePageChange ,page}) => {
  const handleChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <Pagination
      color="warning"
      count={count}
      page={page}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
};

export default CustomPagination

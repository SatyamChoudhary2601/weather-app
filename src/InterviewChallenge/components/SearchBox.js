import { TextField } from "@mui/material";

const SearchBox = ({ label, getSearchText }) => {
  return (
    <TextField
      sx={{ minWidth: "350px" }}
      fullWidth
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={getSearchText}
    />
  );
};

export default SearchBox;

import AppBar from "./components/AppBar";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import WeatherDetails from "./components/WeatherDetails";
import { environment } from "./environment";

export const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const InterviewChallenge = () => {
  const [searchText, setSearchText] = useState("");
  const [debounceTime, setDebounceTime] = useState(null);
  const { data, loading, error } = useFetch(
    `${environment.BASE_URL}/current.json`,
    searchText
  );
  const getSearchText = (event) => {
    const { value } = event.target;
    if (debounceTime) {
      clearTimeout(debounceTime);
    }
    const timeout = setTimeout(() => {
      setSearchText(value);
    }, 500);
    setDebounceTime(timeout);
  };
  return (
    <Box>
      <AppBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Grid item md={12} lg={12}>
          <SearchBox label="Enter location" getSearchText={getSearchText} />
        </Grid>
      </Grid>
      {loading && (
        <Box sx={flexStyle}>
          <CircularProgress />
        </Box>
      )}
      {data !== null && <WeatherDetails data={data} />}
      {error && (
        <Box sx={flexStyle}>
          <Typography variant="h6" color="red">
            {error?.data?.error?.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InterviewChallenge;

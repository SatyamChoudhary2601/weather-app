import { Box, Typography } from "@mui/material";
import { flexStyle } from "../InterviewChallenge";
import WeatherCard from "./WeatherCard";

const WeatherDetails = ({ data }) => {
  return (
    <Box sx={[flexStyle, { flexDirection: "column" }]}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {data?.location?.name},{data?.location?.country}
      </Typography>
      <WeatherCard data={data} />
    </Box>
  );
};

export default WeatherDetails;

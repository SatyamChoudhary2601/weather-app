import { Card, CardContent, Box, Typography } from "@mui/material";
import { flexStyle } from "../InterviewChallenge";

const WeatherCard = ({ data }) => {
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <img
          src={
            data?.current?.condition?.icon ??
            "https://cdn-icons-png.flaticon.com/512/1555/1555512.png"
          }
          alt="weather icon"
        />
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Temperature</Typography>
          <Typography variant="body2">
            {data?.current?.temp_c}&deg;C / {data?.current?.temp_f}&deg;F
          </Typography>
        </Box>
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Condition</Typography>
          <Typography variant="body2">
            {data?.current?.condition?.text}
          </Typography>
        </Box>
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Wind speed</Typography>
          <Typography variant="body2">
            {data?.current?.wind_kph} km/h
          </Typography>
        </Box>
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Humidity</Typography>
          <Typography variant="body2">{data?.current?.humidity}%</Typography>
        </Box>
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Cloud coverage</Typography>
          <Typography variant="body2">{data?.current?.cloud}%</Typography>
        </Box>
        <Box sx={[flexStyle, { justifyContent: "space-between" }]}>
          <Typography variant="body2">Last updated</Typography>
          <Typography variant="subtitle1">
            {data?.current?.last_updated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

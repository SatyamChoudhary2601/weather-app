import {
  AppBar as AppBarHeader,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { flexStyle } from "../InterviewChallenge";
// import MenuIcon from '@mui/icons-material/Menu';

const AppBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarHeader position="static">
          <Toolbar>
            <Typography
              sx={[
                flexStyle,
                {
                  flexGrow: 1
                }
              ]}
              variant="h6"
              component="div"
            >
              Weather App
            </Typography>
          </Toolbar>
        </AppBarHeader>
      </Box>
    </div>
  );
};

export default AppBar;

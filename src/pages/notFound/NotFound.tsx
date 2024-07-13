
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.text.secondary} variant="h5">
       Sorry this page is not found or being maintained
        <br />
        <br />
        <SentimentDissatisfiedIcon/>
      </Typography>
    </Box>
  );
};

export default NotFound;
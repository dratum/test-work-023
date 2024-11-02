import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "25rem auto",
        flexDirection: "column",
      }}
    >
      <Typography>Send...</Typography>
      <CircularProgress />
    </Box>
  );
};

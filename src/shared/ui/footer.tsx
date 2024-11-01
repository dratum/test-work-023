import { Box, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
  console.log("render");

  return (
    <Box
      component='footer'
      position='sticky'
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant='h6'>Some company, 2024</Typography>
      </Toolbar>
    </Box>
  );
};

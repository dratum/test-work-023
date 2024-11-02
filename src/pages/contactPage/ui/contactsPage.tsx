import { Box, Container, Typography } from "@mui/material";
import { Form } from "./form";

export const ContactPage = () => {
  return (
    <Container maxWidth='xs'>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          textAlign: "center",
          p: 3,
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: "background.paper",
          height: "70vh",
        }}
      >
        <Typography variant='h3' component='h1' gutterBottom>
          Only CTA on the page
        </Typography>
        <Form />
      </Box>
    </Container>
  );
};

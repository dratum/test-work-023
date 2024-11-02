import { Box, Container, Typography } from "@mui/material";
import { Form } from "./form";
import { useState } from "react";
import { Loader } from "../../../shared/ui/loader";

export const ContactPage = () => {
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return <Loader />;
  }
  if (responseData) {
    return (
      <Box
        sx={{
          backgroundColor: "grey.300",
          padding: 4,
          textAlign: "center",
          height: "80vh",
        }}
      >
        <Typography
          sx={{ margin: "15rem" }}
        >{`Thank you for your interest, ${responseData}!`}</Typography>
      </Box>
    );
  }
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
        <Form setResponseData={setResponseData} load={setLoading} />
      </Box>
    </Container>
  );
};

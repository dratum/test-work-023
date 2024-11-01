import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
interface Values {
  name: string;
  email: string;
  message: string;
}

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

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {} as Values;
            if (!values.name) {
              errors.name = "Required";
            } else if (values.name.length < 2) {
              errors.name = "Must be 2 char or more";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email";
            }
            if (!values.message) {
              errors.message = "Required";
            } else if (values.message.length < 2) {
              errors.message = "Must be 2 char or more";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 300);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "& .MuiTextField-root": {
                    "& .MuiInputBase-input": {
                      padding: "10px 14px",
                    },
                  },
                }}
              >
                <TextField
                  fullWidth
                  label='Name'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  fullWidth
                  label='Email'
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  label='Message'
                  name='message'
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />

                <Button
                  type='submit'
                  variant='contained'
                  disabled={isSubmitting}
                  sx={{ mt: 2, py: 1, bgcolor: "black" }}
                >
                  Отправить
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { VideoPlayer } from "../../shared/ui/videoPlayer.tsx";
import { ContactButton } from "../../shared/ui/button.tsx";
import { CardSimple } from "../../shared/ui/card.tsx";

export const MainPage = () => {
  console.log("render");

  return (
    <Box
      component={"main"}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box
        sx={{
          backgroundColor: "grey.300",
          padding: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "40%", md: "30vh" },
          gap: 5,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "80%" }, maxWidth: 400 }}>
          <Typography variant='h3' component='h1' gutterBottom>
            Most important title on the page
          </Typography>
          <Typography variant='caption'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </Typography>
        </Box>
        <VideoPlayer />
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box>
          <Typography variant='h3' component='h1' gutterBottom>
            Also very important title
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent='center'>
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSimple id={index} key={index} />
          ))}
        </Grid>
        <ContactButton />
      </Box>
      <Box
        sx={{
          backgroundColor: "grey.300",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "20%", md: "15vh" },
          gap: 5,
        }}
      >
        <Typography variant='h3' component='h1' gutterBottom>
          Less important title
        </Typography>
        <ContactButton />
      </Box>
    </Box>
  );
};

import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";

export const CardSimple = ({ id }: { id: number }) => {
  return (
    <Grid container>
      <Card
        sx={{
          width: 500,
          minHeight: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>
          <Typography variant='h6' component='div'>
            Card {id + 1}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";

export const CardSimple = ({ id }: { id: number }) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          width: 500,
          minHeight: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

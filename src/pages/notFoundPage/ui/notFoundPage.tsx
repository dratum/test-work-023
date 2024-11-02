import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "85vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant='h1'>404</Typography>
      <Typography variant='h4'>Страница не найдена</Typography>
      <Typography variant='body1'>
        Запрашиваемая страница не существует или была удалена
      </Typography>
      <Link to='/'>Вернуться на главную</Link>
    </Box>
  );
};

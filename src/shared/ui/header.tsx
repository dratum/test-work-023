import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ContactButton } from "./button.tsx";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#424242",
});
export const Header = () => {
  return (
    <Box position='sticky' component='header' sx={{ flexGrow: 1, height: 50 }}>
      <StyledAppBar sx={{ top: 0 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Some company
          </Typography>
          <ContactButton />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

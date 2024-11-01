import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});
export const ContactButton = () => {
  return (
    <StyledButton color='primary' variant='contained' href='/contact-us'>
      Contact us
    </StyledButton>
  );
};

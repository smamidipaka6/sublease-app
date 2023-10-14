import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Avatar from "./Avatar"

const StyledCard = styled(Card)({
  borderRadius: "8px", // TODO: Edit this
  backgroundColor: "#333333",
  border: "1px solid #484747"
})

const StyledTypography = styled(Typography)({
  color: '#FFFFFF',
  fontFamily: 'Helvetica Neue',
  fontWeight: 400,
})

const card = (
  <React.Fragment>
    <CardContent>

      <Avatar></Avatar>
      
      <StyledTypography sx={{ mb: 1.5 }} color="text.secondary">
        Just a blank card... For now!
      </StyledTypography>
      
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

const ListingCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <StyledCard variant="outlined">{card}</StyledCard> 
    </Box>
  );
};

export default ListingCard;
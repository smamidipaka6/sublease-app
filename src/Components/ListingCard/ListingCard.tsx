import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Avatar from "../Avatar";
import Grid from "@mui/material/Grid";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import CloseIcon from "@mui/icons-material/Close";
import ResizeableTextCard from "./ResizeableTextCard";

const StyledCard = styled(Card)({
  borderRadius: "8px", // TODO: Edit this
  backgroundColor: "#333333",
  border: "1px solid #484747",
  width: "75%",
  height: 360, // "100%"
});

const StyledTypography = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
});

const card = (
  <React.Fragment>
    <CardContent>
      <Grid
        container
        spacing={2}
        alignItems="top"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xl={2}>
          <TurnedInNotIcon sx={{ color: "#FFFFFF" }}></TurnedInNotIcon>
        </Grid>
        <Grid item xl={8}>
          <Avatar></Avatar>
        </Grid>
        <Grid item xl={2}>
          <CloseIcon sx={{ color: "#FFFFFF" }}></CloseIcon>
        </Grid>
      </Grid>

      <StyledTypography sx={{ mb: 1.5 }} color="text.secondary">
        Sahit Mamidipaka
      </StyledTypography>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xl={4}>
          <ResizeableTextCard
            width={180}
            height={80}
            text1={"$1560"}
            text2={"Total: $9360"}
          ></ResizeableTextCard>
        </Grid>
        <Grid item xl={8}>
          <ResizeableTextCard
            width={250}
            height={80}
            text1={"The Mark"}
            text2={"Midtown"}
          ></ResizeableTextCard>
        </Grid>
      </Grid>
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

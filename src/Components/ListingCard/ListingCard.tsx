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
import GroupDesc from "./GroupDesc";
import SizeAttribute from "./AttributeTags/SizeAttribute";
import PeopleAttribute from "./AttributeTags/PeopleAttribute";
import MaleGenderAttribute from "./AttributeTags/MaleGenderAttribute";

const StyledCard = styled(Card)({
  borderRadius: "8px", // TODO: Edit this
  backgroundColor: "#333333",
  border: "1px solid #484747",
  width: 500,
  height: 360, // "100%"
});

const StyledTypography = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
});

const card = (
  <React.Fragment>
    <CardContent sx={{ margin: 0, padding: 0 }}>
      <Box>
        <Grid
          container
          spacing={0}
          alignItems="top"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={1} sx={{ paddingTop: "12px" }}>
            <TurnedInNotIcon sx={{ color: "#FFFFFF" }}></TurnedInNotIcon>
          </Grid>
          <Grid item xs={10}>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs={1} sx={{ paddingTop: "12px" }}>
            <CloseIcon sx={{ color: "#FFFFFF" }}></CloseIcon>
          </Grid>
        </Grid>
      </Box>

      <StyledTypography sx={{ mb: 1.5 }} color="text.secondary">
        Sahit Mamidipaka
      </StyledTypography>

      <Box sx={{ width: "100%", border: "" }}>
        <Grid
          container
          spacing={0}
          sx={{ alignContent: "center", padding: "0px", magin: "0" }}
        >
          <Grid
            item
            xs={5.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0px",
            }}
          >
            <ResizeableTextCard
              width={180}
              height={80}
              text1={"$1560"}
              text2={"Total: $9360"}
            ></ResizeableTextCard>
          </Grid>
          <Grid
            item
            xs={6.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0px",
            }}
          >
            <ResizeableTextCard
              width={250}
              height={80}
              text1={"The Mark"}
              text2={"Midtown"}
            ></ResizeableTextCard>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ paddingTop: "8px" }}>
        <Grid container spacing={0} sx={{ border: "" }}>
          <Grid
            item
            xs={5}
            sx={{
              paddingLeft: "28px",
              paddingRight: "10px",
              border: "",
            }}
          >
            <Grid
              container
              rowSpacing={1.5}
              sx={{ border: "", justifyContent: "space-evenly" }}
            >
              <Grid item>
                <PeopleAttribute text="4"></PeopleAttribute>
              </Grid>
              <Grid item>
                <SizeAttribute text="4x4"></SizeAttribute>
              </Grid>
              <Grid item>
                <MaleGenderAttribute text="Male"></MaleGenderAttribute>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6.8} sx={{ width: "100%", paddingLeft: "36px", border: "" }}>
            <GroupDesc></GroupDesc>
          </Grid>
        </Grid>
      </Box>
    </CardContent>

    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

const ListingCard = () => {
  return (
    <Box sx={{ minWidth: 0 }}>
      <StyledCard variant="outlined" sx={{}}>
        {card}
      </StyledCard>
    </Box>
  );
};

export default ListingCard;

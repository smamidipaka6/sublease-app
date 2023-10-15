import React from "react";
import Button from "@mui/material/Button";
import NavBar from "../Components/NavBar";
import ListingCard from "../Components/ListingCard/ListingCard";
import BufferBox from "../Components/BufferBox";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import GroupListing from "../Components/GroupListing";


const InvisibleButton = styled(Button)({
  position: "fixed",
  top: 0,
  marginTop: "0px",
  zIndex: 0,
});

function Home() {
  return (
    <>
      <InvisibleButton> </InvisibleButton>
      <GroupListing></GroupListing>
    </>
  );
}

export default Home;

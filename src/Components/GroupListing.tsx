import Grid from "@mui/material/Grid";
import ListingCard from "./ListingCard/ListingCard";
import ListingCard1 from "./ListingCard/ListingCard1";
import ListingCard2 from "./ListingCard/ListingCard2";
import ListingCard3 from "./ListingCard/ListingCard3";
import ListingCard4 from "./ListingCard/ListingCard4";
import ListingCard5 from "./ListingCard/ListingCard5";
import ListingCard6 from "./ListingCard/ListingCard6";
import ListingCard7 from "./ListingCard/ListingCard7";
import ListingCard8 from "./ListingCard/ListingCard8";
import ListingCard9 from "./ListingCard/ListingCard9";
import ListingCard10 from "./ListingCard/ListingCard10";

import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const GroupListing = () => {
  return (
    <div>
      <Box
        sx={{
          paddingTop: "80px",
          display: "flex",
          height: "100vh",
          width: "135vh",
        }}
      >
        <Container>
          <Grid
            container
            spacing={1}
            sx={{ paddingBottom: "25px", border: "" }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <ListingCard></ListingCard>
              <br></br>
              <ListingCard1></ListingCard1>
              <br></br>
              <ListingCard2></ListingCard2>
              <br></br>
              <ListingCard3></ListingCard3>
              <br></br>
              <ListingCard4></ListingCard4>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                border: "",
              }}
            >
              <ListingCard8></ListingCard8>
              <br></br>
              <ListingCard6></ListingCard6>
              <br></br>
              <ListingCard7></ListingCard7>
              <br></br>
              <ListingCard5></ListingCard5>
              <br></br>
              <ListingCard9></ListingCard9>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default GroupListing;

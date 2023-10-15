import React from "react";
import { styled } from "@mui/material";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface Props {
  // imageUrl: string;
  text: string;
}

const CardWrapper = styled(Card)({
  display: "flex",
  alignItems: "center",
  borderRadius: "50px",
  color: "#FFFFFF",
  padding: "0px",
  width: "45px",
  height: "20px",
});

const StyledIcon = styled(BedOutlinedIcon)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #000000;
`;

const CardText = styled(Typography)`
  color: #000;
  font-size: 8px;
  padding: 0px;
  font-weight: bold;
  horizontal-align: middle; /* Align the text vertically */
  vertical-align: middle; /* Vertical alignment for centering */
`;

const SizeAttribute = ({ text }: Props) => {
  return (
    <CardWrapper>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={4.5}>
          <StyledIcon />
        </Grid>
        <Grid
          item
          xs={7.5}
          sx={{
            paddingLeft: "4px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <CardText>{text}</CardText>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default SizeAttribute;

import { styled } from "@mui/material";
import { Card, Typography } from "@mui/material";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import Grid from "@mui/material/Grid";

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
  width: "50px",
  height: "20px",
});

const StyledIcon = styled(Woman2OutlinedIcon)`
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

const FemlaleGenderAttribute = ({ text }: Props) => {
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
          <CardText variant="body1">{text}</CardText>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default FemlaleGenderAttribute;

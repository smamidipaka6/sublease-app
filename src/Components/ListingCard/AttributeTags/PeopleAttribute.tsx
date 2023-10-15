import { styled } from "@mui/material";
import { Card, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
  width: "35px",
  height: "20px"
});

const StyledIcon = styled(PeopleAltIcon)`
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

const PeopleAttribute = ({ text }: Props) => {
  return (
    <CardWrapper>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid item xs={7}>
          <StyledIcon />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            paddingLeft: "1px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center"
          }}
        >
          <CardText variant="body1">{text}</CardText>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default PeopleAttribute;

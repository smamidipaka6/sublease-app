// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface Props {
  height: number;
  width: number;
  text1: string;
  text2: string;
}

const BigText = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  fontSize: 20
});

const SmallText = styled(Typography)({
  color: "#898989",
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  fontSize: 10,
});


const ResizeableTextCard = ({ height, width, text1, text2 }: Props) => {
  return (
    <Card sx={{ width, height, backgroundColor: "#484747", borderRadius: "12px", margin: "auto" }}>
      <CardContent>
        <BigText variant="body1" color="text.primary">
          {text1}
        </BigText>
        <SmallText variant="body2" color="text.secondary">
          {text2}
        </SmallText>
      </CardContent>
    </Card>
  );
};

export default ResizeableTextCard;

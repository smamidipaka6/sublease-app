import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {

  height: number;
  width: number;
  text1: string;
  text2: string;
}

const ResizeableTextCard = ({ height, width, text1, text2 }: Props) => {
  return (
    <Card sx={{ width, height, margin: "auto" }}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {text1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text2}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResizeableTextCard;

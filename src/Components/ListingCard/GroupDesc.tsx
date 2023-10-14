import React from 'react'
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";



const GroupTypography = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Helvetica Neue",
  fontWeight: 400,
  fontSize: 12,
})


const GroupDesc = () => {
  return (
    <GroupTypography>GroupDesc</GroupTypography>
  )
}

export default GroupDesc
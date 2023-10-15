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
    <GroupTypography>
      <div style={{ textAlign: "left" }}>
        &bull; We love playing pool <br />
        &bull; People are at our place post-midnight <br />
        &bull; We cook and study together <br />
        &bull; We're all outgoing and fun to be around (we swear)
        <br />
      </div>
    </GroupTypography>
  );
}

export default GroupDesc
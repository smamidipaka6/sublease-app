import * as React from "react";
import Avatar from "@mui/material/Avatar";

const MyAvatar = () => {
  return (
    <Avatar sx={{ width: 85, height: 85, mx: "auto", mt: 2 }}>
      <img
        src="public/sahit.jpeg"
        alt="Avatar"
        style={{ width: "85px", height: "85px" }}
      />
    </Avatar>
  );
};

export default MyAvatar;

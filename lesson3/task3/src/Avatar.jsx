import React from "react";
import "./avatar.scss";

function Avatar(props) {
  return (
        <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}

export default Avatar;
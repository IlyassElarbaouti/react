import React from "react";
import UserForm from "./UserForm.jsx";

const Profile = ({ userData, changeHandler }) => {
  return (
    <div className="column">
      <UserForm changeHandler={changeHandler} userData={userData} />
    </div>
  );
};

export default Profile;

import React from "react";

const UserForm = ({ userData, changeHandler }) => {
  return (
    <>
      <input
        onChange={changeHandler}
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
      />
      <input
        onChange={changeHandler}
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
      />
    </>
  );
};

export default UserForm;

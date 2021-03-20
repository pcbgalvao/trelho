import React from "react";

const UserRegister = () => {
  return (
    <div>
      <form>
        <label for="fullname">Full name:</label>
        <input type="text" id="fullname" name="fullname" />
        <label for="login">Login:</label>
        <input type="text" id="login" name="login" />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </div>
  );
};

export default UserRegister;

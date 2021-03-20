import React, { useEffect, useState, useRef } from "react";
import { useInterval } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsUserLoggedIn,
  selectFullname,
  selectLogin,
  selectEmail,
  selectPassword,
} from "../store/userLoggedInSlice";


const Menu = () => {
  const [valueTimeDate, setValueTimeDate] = useState(
    new Date().toLocaleString()
  );
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const fullName = useSelector(selectFullname);
  const login = useSelector(selectLogin);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  useInterval(()=>setValueTimeDate(new Date().toLocaleString()), 1000);

  console.count("Menu");
  return (
    <div className="menu">
      <div>
        <p>Trelho App</p>
        <p>{valueTimeDate}</p>
        {isUserLoggedIn ? (
          <>
            <p>Olá: ${fullName}</p>
            <p>Logout</p>
          </>
        ) : (
          <>
            <p>Register</p>
            <p>Login</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;

import React, { useContext } from "react";
import { Data } from "../ContextApi/Context";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Styles/Users.scss";

function Users() {
  const { users, theme } = useContext(Data);
  return (
    <div className={theme}>
      <Header />
      <div className="main"></div>
    </div>
  );
}

export default Users;

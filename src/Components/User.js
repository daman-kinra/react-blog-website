import React from "react";
import { Link } from "react-router-dom";
function User(props) {
  return (
    <div className="box">
      <div className="leftbox">
        <ul>
          <li>{props.user.id}</li>
          <li>{props.user.name}</li>
          <li>{props.user.sername}</li>
          <li>{props.user.email}</li>
        </ul>
      </div>
      <div className="right_box">
        <ul>
          <li>{props.user.phone}</li>
          <li>{props.user.website}</li>
          <li>{props.user.company.name}</li>
          <li>
            <Link to={`/posts/${props.user.id}`}>click</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;

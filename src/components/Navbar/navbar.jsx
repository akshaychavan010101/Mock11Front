import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { state } = props;
  return (
    <div className={style.navbar}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.li}>
          <Link to="/post">Post</Link>
        </li>
        <li className={style.li}>
          <Link to="/retrive">Retrive</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

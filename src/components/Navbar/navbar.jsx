import React from "react";
import style from "./navbar.module.css";

function Navbar(props) {
  const { state } = props;
  return (
    <div className={style.navbar}>
      <ul className={style.ul}>
        <li className={style.li}>
          <a href="/">Home</a>
        </li>
        <li className={style.li}>
          <a href="/post">Post</a>
        </li>
        <li className={style.li}>
          <a href="/retrive">Retrive</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import s from "./header.module.css";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../../actions/actions";
import Searchbar from "../Searchbar/Searchbar";
import { GiEarthAmerica } from "react-icons/gi";

function Header() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(fetchCountries());
  };

  return (
    <div className={s.header}>
      <Link to="/home" className={s.title} onClick={handleClick}>
        <h1 className={s.title}>
          <GiEarthAmerica /> Henry Countries{" "}
        </h1>
      </Link>
      <div className={s.options}>
        <Link to="/home" className={s.link} onClick={handleClick}>
          Home
        </Link>
        <Link to="/add" className={s.link}>
          Nueva Actividad
        </Link>
      </div>
      <Searchbar />
    </div>
  );
}

export default Header;

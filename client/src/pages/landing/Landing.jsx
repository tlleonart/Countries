import React from "react";
import s from "./landing.module.css";
import landingImg from "../../services/citiesandtowns.jpg";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className={s.landing}>
      <img className={s.image} src={landingImg} alt="img" />
      <div className={s.content}>
        <h1>Ciudades del Mundo</h1>
        <h2>Henry</h2>
        <Link to="/home" className={s.link}>
          Ingresar!
        </Link>
      </div>
    </div>
  );
}

export default Landing;

import React from "react";
import s from "./landing.module.css";
import landingImg from "../../services/citiesandtowns.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

function Landing() {
  return (
    <motion.div
      className={s.landing}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className={s.content}>
        <h1>HENRY COUNTRIES</h1>
        <Link to="/home" className={s.link}>
          Ingresar!
        </Link>
      </div>
    </motion.div>
  );
}

export default Landing;

import React from "react";
import s from "./cards.module.css";
import { Link } from "react-router-dom";

function Cards({ name, imgUrl, continent, id }) {
  return (
    <Link to={`/detail/${id}`} className={s.cards}>
      <img src={imgUrl} alt="img" className={s.image} />
      <div className={s.data}>
        <h3 className={s.name}>{name}</h3>
        <h4 className={s.continent}>{continent}</h4>
      </div>
    </Link>
  );
}

export default Cards;

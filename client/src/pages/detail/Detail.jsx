import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOne } from "../../actions/actions";
import Header from "../../components/Header/Header";
import s from "./detail.module.css";

function Detail() {
  const id = useParams();
  const countryDetail = useSelector((state) => state.detailReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOne(id.id));
  }, [id, dispatch]);

  console.log(countryDetail);
  return (
    <div className={s.detail}>
      <Header />
      <div className={s.card}>
        <div className={s.countrydetail}>
          <img src={countryDetail.img} alt="img" />
          <div className={s.datacontainer}>
            <div className={s.maindata}>
              <h1 className={s.title}>{countryDetail.name}</h1>
              <div className={s.subtitle}>
                {countryDetail.name.substring(0, 3).toUpperCase()} -{" "}
                {countryDetail.continent}
              </div>
            </div>
            <span>Capital: {countryDetail.capital}</span>
            <span>Subregión: {countryDetail.subregion}</span>
            <span>Área: {countryDetail.area} km2</span>
            <span>Población: {countryDetail.pop}</span>
          </div>
        </div>
        <div className={s.activities}>
          <h2>Actividades Turísticas</h2>
          {countryDetail.activities.map((e) => {
            return (
              <div className={s.data}>
                <h3>{e.name}</h3>
                <p>Dificultad: {e.dificulty}</p>
                <p>Duración: {e.duration} hs.</p>
                <p>
                  Estaciones:{" "}
                  {e.season.map((s) => (
                    <span>{s} </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Detail;

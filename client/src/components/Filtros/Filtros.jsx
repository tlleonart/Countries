import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCountries,
  filtrarActividad,
  filtrarContinente,
} from "../../actions/actions";
import s from "./filtros.module.css";
import axios from "axios";

function Filtros() {
  const [activities, setActivities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/activity/")
      .then((r) => setActivities(r.data));
  }, []);

  console.log(activities);

  const handleContinentes = (e) => {
    e.target.value === "Continente"
      ? dispatch(fetchCountries())
      : dispatch(filtrarContinente(e.target.value));
  };

  const handleActividad = (e) => {
    e.target.value === "Actividad"
      ? dispatch(fetchCountries())
      : dispatch(filtrarActividad(e.target.value));
  };

  return (
    <div>
      <select className={s.continentes} onChange={handleContinentes}>
        <option value="Continente" onChange={handleContinentes}>
          Continente
        </option>
        <option onChange={handleContinentes} value="Antarctica">
          Antarctica
        </option>
        <option onChange={handleContinentes} value="South America">
          América del Sur
        </option>
        <option onChange={handleContinentes} value="North America">
          América del Norte
        </option>
        <option onChange={handleContinentes} value="Asia">
          Asia
        </option>
        <option onChange={handleContinentes} value="Africa">
          África
        </option>
        <option onChange={handleContinentes} value="Europe">
          Europa
        </option>
        <option onChange={handleContinentes} value="Oceania">
          Oceanía
        </option>
      </select>
      <select className={s.tipo} onChange={handleActividad}>
        <option>Actividad</option>
        {!(activities.length === 0) &&
          activities.map((r) => {
            return (
              <option onChange={handleActividad} value={r.name} key={r.name}>
                {r.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Filtros;

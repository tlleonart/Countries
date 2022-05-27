import React from "react";
import { useDispatch } from "react-redux";
import { ordenNombre, ordenPoblacion } from "../../actions/actions";
import s from "./order.module.css";

function Order() {
  const dispatch = useDispatch();
  const onSelect = (e) => {
    e.preventDefault();
    e.target.value[0] === "n"
      ? dispatch(ordenNombre(e.target.value))
      : dispatch(ordenPoblacion(e.target.value));
  };
  return (
    <section className={s.filters}>
      <div>
        <h3 className={s.title}>Ordenar</h3>
        <div className={s.options}>Nombre</div>
        <div className={s.options}>Población</div>
      </div>
      <div>
        <h3 className={s.title}>Continentes</h3>
        <div className={s.options}>Antártica</div>
        <div className={s.options}>América del Sur</div>
        <div className={s.options}>América del Norte</div>
        <div className={s.options}>Asia</div>
        <div className={s.options}>África</div>
        <div className={s.options}>Europa</div>
        <div className={s.options}>Oceanía</div>
      </div>
      <div>
        <h3 className={s.title}>Estaciones</h3>
        <div className={s.options}>Otoño</div>
        <div className={s.options}>Verano</div>
        <div className={s.options}>Invierno</div>
        <div className={s.options}>Primavera</div>
      </div>
      {/* <select className={s.orden} onChange={onSelect}>
        <option className={s.title}>Ordenar</option>
        <option value="nombreAscendente">Nombre Ascendente</option>
        <option value="nombreDescendente">Nombre Descendente</option>
        <option value="popAscendente">Población Ascendente</option>
        <option value="popDescendente">Población Descendente</option>
      </select> */}
    </section>
  );
}

export default Order;

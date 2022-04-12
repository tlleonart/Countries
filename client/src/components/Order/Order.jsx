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
    <select className={s.orden} onChange={onSelect}>
      <option className={s.title}>Ordenar</option>
      <option value="nombreAscendente">Nombre Ascendente</option>
      <option value="nombreDescendente">Nombre Descendente</option>
      <option value="popAscendente">Población Ascendente</option>
      <option value="popDescendente">Población Descendente</option>
    </select>
  );
}

export default Order;

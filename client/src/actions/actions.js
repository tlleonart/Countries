import {
  FETCH_COUNTRIES,
  FETCH_ONE,
  FILTRAR_ACTIVIDAD,
  FILTRAR_CONTINENTE,
  ORDENAR_NOMBRE,
  ORDENAR_POBLACION,
  SEARCH_COUNTRY,
} from "./types";
import axios from "axios";

export function fetchCountries() {
  return (dispatch) => {
    return axios.get("http://localhost:3001/api/country").then((r) => {
      dispatch({ type: FETCH_COUNTRIES, payload: r.data });
    });
  };
}

export function searchCountry(name) {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/api/country/?name=${name}`)
      .then((r) => {
        dispatch({ type: SEARCH_COUNTRY, payload: r.data });
      })
      .catch((e) => dispatch({ type: SEARCH_COUNTRY, payload: [] }));
  };
}

export function fetchOne(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:3001/api/country/${id}`).then((r) => {
      dispatch({ type: FETCH_ONE, payload: r.data });
    });
  };
}

export function ordenNombre(orden) {
  return { type: ORDENAR_NOMBRE, payload: orden };
}

export function ordenPoblacion(orden) {
  return { type: ORDENAR_POBLACION, payload: orden };
}

export function filtrarContinente(continente) {
  return { type: FILTRAR_CONTINENTE, payload: continente };
}

export function filtrarActividad(tipo) {
  return { type: FILTRAR_ACTIVIDAD, payload: tipo };
}

export function crearActividad(actividad) {
  return (dispatch) => {
    return axios.post(`http://localhost:3001/api/activity/`, actividad);
  };
}

export function fetchActividades() {
  return (dispatch) => {
    return axios.get(`http://localhost:3001/api/activity/`).then((r) => r.data);
  };
}

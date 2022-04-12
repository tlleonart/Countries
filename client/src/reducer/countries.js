import {
  FETCH_COUNTRIES,
  FILTRAR_ACTIVIDAD,
  FILTRAR_CONTINENTE,
  ORDENAR_NOMBRE,
  ORDENAR_POBLACION,
  SEARCH_COUNTRY,
} from "../actions/types";

const initialState = {
  countries: [],
  displayCountries: [],
  error: "",
};

export default function countriesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: payload,
        displayCountries: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        displayCountries: payload,
      };
    case ORDENAR_NOMBRE:
      let sortedCountries = [...state.countries];
      sortedCountries = sortedCountries.sort((a, b) => {
        if (a.name < b.name) {
          return payload === "nombreAscendente" ? -1 : 1;
        }
        if (a.name > b.name) {
          return payload === "nombreAscendente" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        displayCountries: sortedCountries,
      };
    case ORDENAR_POBLACION:
      let sortedCountriesPop = [...state.countries];
      console.log(sortedCountriesPop);
      sortedCountriesPop = sortedCountriesPop.sort((a, b) => {
        if (a.pop < b.pop) {
          return payload === "popAscendente" ? -1 : 1;
        }
        if (a.pop > b.pop) {
          return payload === "popAscendente" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        displayCountries: sortedCountriesPop,
      };
    case FILTRAR_ACTIVIDAD:
      return {
        ...state,
        displayCountries: state.countries.filter(
          (c) => c.activities.filter((a) => a.name === payload).length !== 0
        ),
      };
    case FILTRAR_CONTINENTE:
      return {
        ...state,
        displayCountries: state.countries.filter(
          (e) => e.continent === payload
        ),
      };
    default:
      return state;
  }
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries, searchCountry } from "../../actions/actions";
import Filtros from "../Filtros/Filtros";
import Order from "../Order/Order";
import s from "./searchbar.module.css";

function Searchbar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      let camelSearch = search[0].toUpperCase() + search.substring(1);
      dispatch(searchCountry(camelSearch));
    } else {
      dispatch(fetchCountries());
    }
    setSearch("");
  };

  return (
    <div className={s.searchbar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca un país..."
          onChange={handleChange}
          value={search}
        />
      </form>
      <div className={s.botones}>
        <Order />
        <Filtros />
      </div>
    </div>
  );
}

export default Searchbar;

import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import Searchbar from "../../components/Searchbar/Searchbar";
import s from "./home.module.css";

function Home() {
  const countries = useSelector(
    (state) => state.countriesReducer.displayCountries
  );

  return (
    <div className={s.home}>
      <Header />
      <Searchbar />
      <MainContainer countries={countries} />
    </div>
  );
}

export default Home;

import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import Searchbar from "../../components/Searchbar/Searchbar";
import s from "./home.module.css";
import { motion } from "framer-motion/dist/framer-motion";

function Home() {
  const countries = useSelector(
    (state) => state.countriesReducer.displayCountries
  );

  console.log(countries[2]);

  return (
    <motion.div
      className={s.home}
      initial={{ width: "100%" }}
      animate={{ width: "100%" }}
      exit={{ y: -window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Header />
      <MainContainer countries={countries} />
    </motion.div>
  );
}

export default Home;

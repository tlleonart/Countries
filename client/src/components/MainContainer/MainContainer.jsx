import React, { useEffect, useState } from "react";

import Cards from "../Cards/Cards";
import s from "./maincontainer.module.css";

import Pagination from "../Pagination/Pagination";

function MainContainer({ countries }) {
  const [page, setPage] = useState(0);
  const maxPage = countries.length / 10;

  useEffect(() => {
    setPage(0);
  }, [countries]);
  const filteredCountries =
    page === 0
      ? countries.slice(0, 9)
      : countries.slice(page * 10 - 1, page * 10 + 9);

  return (
    <div className={s.contenedor}>
      <div className={s.maincontainer}>
        {filteredCountries.map((c) => {
          return (
            <Cards
              name={c.name}
              key={c.id}
              imgUrl={c.img}
              continent={c.continent}
              id={c.id}
            />
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
}

export default MainContainer;

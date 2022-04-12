import React from "react";
import s from "./pagination.module.css";

function Pagination({ page, setPage, maxPage }) {
  const prevPage = (e) => {
    e.preventDefault();
    page > 0 ? setPage(page - 1) : setPage(0);
  };

  const nextPage = (e) => {
    e.preventDefault();
    page < maxPage ? setPage(page + 1) : setPage(page);
  };

  return (
    <div className={s.paginacion}>
      <button onClick={prevPage}> {"<"} </button>
      <span> {page} </span>
      <button onClick={nextPage}> {">"} </button>
    </div>
  );
}

export default Pagination;

import React from "react";
import s from "./pagination.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
      <button onClick={prevPage}>
        {" "}
        <FaArrowLeft />{" "}
      </button>
      <span>
        {" "}
        Página {page + 1} de {maxPage + 1}{" "}
      </span>
      <button onClick={nextPage}>
        {" "}
        <FaArrowRight />{" "}
      </button>
    </div>
  );
}

export default Pagination;

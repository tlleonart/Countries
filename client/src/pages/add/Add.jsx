import React from "react";
import AddForm from "../../components/AddForm/AddForm";
import Header from "../../components/Header/Header";
import s from "./add.module.css";

function Add() {
  return (
    <div className={s.addpage}>
      <Header />
      <AddForm />
    </div>
  );
}

export default Add;

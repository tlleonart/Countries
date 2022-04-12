import React, { useState } from "react";
import s from "./addform.module.css";
import { useDispatch, useSelector } from "react-redux";
import { crearActividad } from "../../actions/actions";

function AddForm() {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const [selectCountry, setSelectCountry] = useState(false);

  const [newAct, setNewAct] = useState({
    name: "",
    dificulty: 0,
    duration: 0,
    season: [],
    countries: [],
  });

  const [showErrors, setShowErrors] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [messages, setMessages] = useState([]);
  let errors = [];
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setSelectCountry(!selectCountry);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setNewAct((prevAct) => {
        return {
          ...prevAct,
          countries: [...prevAct.countries, e.target.value],
        };
      });
    } else {
      setNewAct((prevAct) => {
        return {
          ...prevAct,
          countries: prevAct.countries.filter((c) => c !== e.target.value),
        };
      });
    }
  };
  const handleCheckSeason = (e) => {
    if (e.target.checked) {
      setNewAct((prevAct) => {
        return {
          ...prevAct,
          season: [...prevAct.season, e.target.value],
        };
      });
    } else {
      setNewAct((prevAct) => {
        return {
          ...prevAct,
          season: prevAct.season.filter((c) => c !== e.target.value),
        };
      });
    }
    console.log(newAct);
  };
  const handleChange = (e) => {
    setNewAct((prevAct) => {
      return {
        ...prevAct,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([]);
    errors = [];
    if (
      !(
        newAct.name.length > 2 &&
        !/[^a-zA-Z0]/.test(newAct.name.replace(/ /g, ""))
      )
    )
      errors.push("Ingrese un nombre valido, sin caracteres especiales...");
    if (!(newAct.dificulty > 0))
      errors.push("Ingrese la dificultad de la actividad, entre 1 y 5...");
    if (!(newAct.duration < 24 && newAct.duration > 0))
      errors.push("Ingrese una duración válida, no mayor a 24 horas...");
    if (!newAct.season.length > 0)
      errors.push(
        "Seleccione la estación en la que puede realizarse esta actividad..."
      );
    if (!newAct.countries.length > 0)
      errors.push(
        "Seleccione al menos un país donde pueda realizarse esta actividad..."
      );
    if (errors.length === 0) {
      setShowErrors(false);
      setShowSuccess(true);
      dispatch(crearActividad(newAct));
    } else {
      setMessages(errors);
      setShowErrors(true);
    }
  };

  return (
    <form className={s.addform} onSubmit={handleSubmit}>
      {!showSuccess && (
        <>
          <div className={s.description}>
            <p>¿Cuál es el nombre de esta actividad?</p>
            <input type="text" name="name" onChange={handleChange} />
            <p>¿Cuál es la dificultad de esta actividad?</p>
            <select onChange={handleChange} name="dificulty">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <p>¿Cuánto dura esta actividad en horas?</p>
            <input type="number" name="duration" onChange={handleChange} />
            <p>¿En qué temporada se puede realizar esta actividad?</p>
            <div onChange={handleCheckSeason} name="season">
              <p>
                Verano <input type="checkbox" value="Verano" />{" "}
              </p>
              <p>
                Otoño <input type="checkbox" value="Otoño" />
              </p>
              <p>
                Invierno <input type="checkbox" value="Invierno" />
              </p>
              <p>
                Primavera <input type="checkbox" value="Primavera" />
              </p>
            </div>
          </div>
          <div className={s.countries}>
            <button onClick={handleClick}>Click para seleccionar países</button>
            {showErrors &&
              messages.map((e) => {
                return (
                  <p key={e} className={s.messages}>
                    {e}
                  </p>
                );
              })}

            {selectCountry && (
              <div className={s.selectCountry}>
                <button className={s.selectbutton} onClick={handleClick}>
                  X
                </button>
                {countries.map((e) => {
                  return (
                    <p key={e.id}>
                      {e.name}
                      <input
                        type="checkbox"
                        value={e.name}
                        name="countries"
                        onChange={handleCheck}
                      />
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          <button className={s.btn}>Agregar</button>
        </>
      )}
      {showSuccess && <div>Actividad creada con éxito!</div>}
    </form>
  );
}

export default AddForm;

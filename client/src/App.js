import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Add from "./pages/add/Add";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "./actions/actions";
import Landing from "./pages/landing/Landing";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;

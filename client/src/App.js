import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Add from "./pages/add/Add";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "./actions/actions";
import Landing from "./pages/landing/Landing";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <AnimatedRoutes />
    </div>
  );
}

export default App;

import { Component, ParentComponent } from "solid-js";
import { Router } from "@solidjs/router"; // Você precisará criar esse
import { Routes } from "./app.routes"; // Vamos modificar as rotas

const RootProvider: ParentComponent = (props) => {
  return <>{props.children}</>;
};

const App: Component = () => {
  return <Router root={RootProvider}>{Routes}</Router>;
};

export default App;

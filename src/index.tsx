import { render } from "solid-js/web";
import "./index.css";
import App from "./app/app.tsx";

const root = document.getElementById("root");

render(() => <App />, root!);

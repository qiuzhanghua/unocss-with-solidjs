import { render } from "solid-js/web";
import "./style.css";
import "virtual:uno.css";
import App from "./App";

render(() => <App />, document.getElementById("app") as HTMLElement);

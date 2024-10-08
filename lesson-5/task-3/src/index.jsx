import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(<App />);

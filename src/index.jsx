import React from "react";
import ReactDOMClient from "react-dom/client";
import { Landpage } from "./screens/Landpage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Landpage />);

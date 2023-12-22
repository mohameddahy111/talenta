import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {SnackbarProvider} from "notistack";
import { DataStoreProvider } from "./context/DataStore";
import './i18n'
import axios from "axios";

axios.defaults.baseURL = process.env.BASICURL
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{vertical: "top", horizontal: "center"}}>
      <DataStoreProvider>
        <App />
      </DataStoreProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

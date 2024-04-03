import React from "react";
import { createRoot } from "react-dom/client";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <IonApp>
      <IonReactRouter>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>
);

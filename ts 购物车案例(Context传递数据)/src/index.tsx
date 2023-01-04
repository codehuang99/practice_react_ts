import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppStateProvide } from "./AppState";

ReactDOM.render(
  <React.StrictMode>
    {/* 使用AppStateProvide封装的组件来包裹 */}
    <AppStateProvide>
      <App />
    </AppStateProvide>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//1.通过定义context要传入的默认值
const defaultContextValue = {
  username: "阿莱克斯",
};
//2.通过创建React.createContext来创建context并导出
export const appContext = React.createContext(defaultContextValue);

ReactDOM.render(
  <React.StrictMode>
    {/* 3.使用appContext.Provider来传递，value为传递的值 */}
    <appContext.Provider value={defaultContextValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// import "@fontsource/lora";
// import "@fontsource/arizonia";
// import "./styles/globals.scss";

// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from "./app";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "@/redux/store";
// import App from "./app";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );


import "@fontsource/lora";
import "@fontsource/arizonia";
import "./styles/globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Fixing store import path if aliasing is problematic
import store from "./redux/store"; // Use relative import instead of @
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

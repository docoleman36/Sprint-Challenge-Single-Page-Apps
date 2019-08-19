import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import TabNav from "./components/TabNav.js";
import AppRouter from "./components/AppRouter.js";


export default function App() {
  return (
    <main>
      <TabNav />
      <AppRouter />
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

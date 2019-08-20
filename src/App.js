import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import TabNav from "./components/TabNav.js";
import Header from './components/Header';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
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

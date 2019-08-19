import React from "react";
import { Tab } from 'semantic-ui-react'
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import WelcomePage from './components/WelcomePage';
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodesList from './components/EpisodesList.js';
// import AppRouter from "./components/AppRouter.js";


export default function App() {
  return (
    <main>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/characters">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/locations">
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/episodes">
            Episodes
          </NavLink>
        </li>
      </ul>

      <Header />
      <Route exact path="/home" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodesList} />

      {/* <TabNav />
      <AppRouter /> */}
    </main>
  );
}

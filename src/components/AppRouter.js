import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import WelcomePage from './WelcomePage';
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodesList from './EpisodesList.js';

export default function AppRoutes() {
  return (
    <nav>
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
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodesList} />
    </nav>
  );

}
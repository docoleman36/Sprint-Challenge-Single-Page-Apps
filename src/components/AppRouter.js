import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import WelcomePage from './WelcomePage';
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodesList from './EpisodesList.js';

export default function AppRouter(props) {
  return (
    <div>
      <Route
        exact
        path="/"
        component={WelcomePage}
      />

      <Route
        path="/characters"
        render={props => <CharacterList {...props} />}
      />

      <Route
        path="/locations"
        render={props => <LocationsList {...props} />}
      />

      <Route
        path="/episodes"
        render={props => <EpisodesList {...props} />}
      />
    </div>
  );
};
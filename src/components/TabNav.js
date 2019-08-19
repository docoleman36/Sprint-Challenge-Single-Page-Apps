import React from "react";
import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";

const panes = [
  {
    menuItem: 'Home', render: () => <Tab.Pane>
      <NavLink exact as={WelcomePage}>Home</NavLink>
    </Tab.Pane>
  },
  {
    menuItem: 'Characters', render: () => <Tab.Pane>
      <NavLink exact as={CharacterList}>Characters</NavLink>
    </Tab.Pane>
  },
  { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },

]

const TabComponents = () => <Tab panes={panes} />

export default TabComponents




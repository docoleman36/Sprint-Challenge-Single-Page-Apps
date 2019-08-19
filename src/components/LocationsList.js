import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import axios from 'axios';

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log(response.data.results);
        setLocation(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        <h1>Locations Page</h1>
        {location.map(locations => (
          <Card>
            <Card.Content>
              <Card.Header key={locations.id}>{locations.name}</Card.Header>
              <Card.Meta>
                <span>{locations.type}</span>
                <span>{locations.dimension}</span>
              </Card.Meta>
              <Card.Description>{locations.created}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}

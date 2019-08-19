import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';

export default function CharacterList(props) {
  const [track, setTrack] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setTrack(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        {track.map(characters => (
          <Card>
            <Image src={characters.image}></Image>
            <Card.Content>
              <Card.Header key={characters.id}>{characters.name}</Card.Header>
              <Card.Meta>
                <span>{characters.gender}</span>
                <span>{characters.species}</span>
              </Card.Meta>
              <Card.Description>{characters.created}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}

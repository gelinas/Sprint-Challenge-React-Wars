import React from "react";
import {
    Container, Row
  } from 'reactstrap';

import CharacterCard from "./charactercard";
  
const CharPage = (props) => {
  // check to see if it has loaded yet
  if (!props.characterList) return <h3>Loading...</h3>;
  
  
  // Display your component as normal after the data has been fetched

  console.log("in characterpage.js", props.characterList);

  let characterList = props.characterList;

  console.log("in variable", characterList);


  return (
    <Container>
      <Row>
        {characterList.map((character, index) => {
          console.log(character);
          return (
              <CharacterCard
                key={index}
                name={character.name}
                birth_year={character.birth_year}
                species={character.species}
                films={character.films}
              />
          );
          })}
      </Row>
    </Container>
  );
};
  
  export default CharPage;
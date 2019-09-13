import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
const CharacterCard = (props) => {
    return (
        <Card>
            <CardBody>
            <CardTitle>{ props. name}</CardTitle>
            <CardSubtitle>{`Born ${ props.birth_year }`}</CardSubtitle>
            <CardText>
                {`${ props.name } has appeared in ${ props.films.length } ${ props.films.length === 1 ? 'film' : 'films'}`}
            </CardText>
            </CardBody>
        </Card>
    );
};
  
  export default CharacterCard;
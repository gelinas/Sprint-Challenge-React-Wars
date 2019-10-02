import React from "react";
import {
    Badge, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  
const CharacterCard = (props) => {
    return (
        <Col xs="12" sm="6" md="4">

        <Card>
            <CardBody>
            <CardTitle>
                <Badge color="primary">
                    { props.name }
                </Badge>
            </CardTitle>
            <CardSubtitle>{`Born ${ props.birth_year }`}</CardSubtitle>
            <CardText>
                {`${ props.name } has appeared in ${ props.films.length } ${ props.films.length === 1 ? 'film' : 'films'}`}
            </CardText>
            </CardBody>
        </Card>

        </Col>
    );
};
  
  export default CharacterCard;
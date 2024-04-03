import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

import PropsType from "prop-types";

function Player({ nom, club, nationalite, num_maillot, age, url_joueur }) {
  return (
    <Fragment>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={url_joueur} />
        <Card.Body>
          <h5>
            {nom} : {num_maillot}
          </h5>
          <p>Tationalite: {nationalite}</p>
          <p>Club: {club}</p>
          <p>Age: {age} ans</p>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

Player.propTypes = {
  nom: PropsType.string,
  club: PropsType.string,
  nationalite: PropsType.string,
  num_maillot: PropsType.number,
  age: PropsType.number,
  url_joueur: PropsType.string,
};

export default Player;

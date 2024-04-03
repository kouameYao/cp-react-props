import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "./Player";
import { players } from "./players";

const PlayersList = () => {
  return (
    // Pour ajouter un padding sur players et la responsivité
    <Container>
      <Row md={4}>
        {players.map((player) => {
          return (
            <Col>
              <Player
                nom={player.nom}
                age={player.age}
                nationalite={player.nationalite}
                club={player.club}
                url_joueur={player.url_joueur}
                num_maillot={player.num_maillot}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PlayersList;

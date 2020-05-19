import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-redux";
import { Card, Button } from "antd";

const CardMeetup = ({ info, redirect }) => (
  <Card
    key={info.id}
    title={info.title}
    className="cards"
    actions={[
      <Button key="Asistir" onClick={() => redirect(info.id)}>
        Asistiré
      </Button>
    ]}
  >
    <p>{info.description}</p>
    <p>{`Fecha del evento ${info["date-picker"]}`}</p>
    <p>{`Temperatura para ese dia C°${info.temperature} grados.`}</p>
  </Card>
);

CardMeetup.propTypes = {
  info: PropTypes.object,
  logged: PropTypes.func
};

export default CardMeetup;

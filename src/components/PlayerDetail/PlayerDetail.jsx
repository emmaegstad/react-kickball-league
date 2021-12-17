import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerDetail.css';

export default function PlayerDetail(props) {
  return (
    <>
      <h3>{props.player.name}</h3>
      <Link to={`/teams/${props.player.teams.id}`}>{props.player.teams.name}</Link>
    </>
  );
}

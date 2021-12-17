import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerDetail.css';

export default function PlayerDetail(props) {
  return (
    <>
      <h1>{props.player.name}</h1>
      <Link to={`/teams/${props.player.teams.id}`}>{props.player.teams.name}</Link>
    </>
  );
}

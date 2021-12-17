import React from 'react';
import { Link } from 'react-router-dom';
import './TeamDetail.css';

export default function TeamDetail(props) {
  return (
    <>
      <h1>{props.team.name}</h1>
      <p>
        {props.team.city}, {props.team.state}
      </p>
      <h3>Players</h3>
      {props.team.players.map((player) => {
        return (
          <Link key={player.name} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        );
      })}
    </>
  );
}

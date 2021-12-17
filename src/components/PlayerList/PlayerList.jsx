import React from 'react';
import './PlayerList.css';
import { Link } from 'react-router-dom';
import Player from '../../views/Player/Player';

export default function PlayerList() {
  return (
    <>
      <h3>I am a player list.</h3>
      <Link to="/Player">Player</Link>
      <Link to="/Player">Player</Link>
      <Link to="/Player">Player</Link>
    </>
  );
}

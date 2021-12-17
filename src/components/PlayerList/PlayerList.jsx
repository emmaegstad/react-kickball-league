import React from 'react';
import './PlayerList.css';
import { Link } from 'react-router-dom';

export default function PlayerList({ name }) {
  return (
    <>
      <Link to="/Player">{name}</Link>
    </>
  );
}

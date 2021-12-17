import React from 'react';
import './PlayerList.css';
import { Link } from 'react-router-dom';

export default function PlayerList({ name, id }) {
  return (
    <>
      <Link key={id} to={`/players/${id}`}>
        {name}
      </Link>
    </>
  );
}

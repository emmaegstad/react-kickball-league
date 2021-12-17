import React from 'react';
import { Link } from 'react-router-dom';
import './TeamList.css';

export default function TeamList({ name, id }) {
  return (
    <>
      <Link key={id} to={`/teams/${id}`}>
        {name}
      </Link>
    </>
  );
}

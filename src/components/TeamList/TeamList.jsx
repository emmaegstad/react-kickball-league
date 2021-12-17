import React from 'react';
import { Link } from 'react-router-dom';
import './TeamList.css';

export default function TeamList({ name }) {
  return (
    <>
      <Link to="/Team">{name}</Link>
    </>
  );
}

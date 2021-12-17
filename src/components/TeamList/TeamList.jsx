import React from 'react';
import { Link } from 'react-router-dom';
import './TeamList.css';

export default function TeamList() {
  return (
    <>
      <h3>I am a team list.</h3>
      <Link to="/Team">Team</Link>
      <Link to="/Team">Team</Link>
      <Link to="/Team">Team</Link>
    </>
  );
}

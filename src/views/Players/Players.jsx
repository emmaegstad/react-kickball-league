import { useState, useEffect } from 'react';
import './Players.css';
import PlayerList from '../../components/PlayerList/PlayerList';
import { fetchPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Players</h1>
      {players.map((player) => {
        return <PlayerList key={player.id} {...player} />;
      })}
    </>
  );
}

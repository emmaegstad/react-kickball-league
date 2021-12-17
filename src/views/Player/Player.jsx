import './Player.css';
import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetail from '../../components/PlayerDetail/PlayerDetail';

export default function Player(props) {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3 className="loader">loading...</h3>;

  return (
    <div className="player">
      <PlayerDetail id={id} player={player[0]} />
    </div>
  );
}

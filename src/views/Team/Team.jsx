import './Team.css';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../../services/teams';
import TeamDetail from '../../components/TeamDetail/TeamDetail';

export default function Team(props) {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h3 className="loader">loading...</h3>;

  return (
    <div className="team">
      <TeamDetail id={id} team={team[0]} />
    </div>
  );
}

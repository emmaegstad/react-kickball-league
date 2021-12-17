import { useState, useEffect } from 'react';
import './Teams.css';
import TeamList from '../../components/TeamList/TeamList';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h3 className="loader">loading...</h3>;
  return (
    <div className="teams">
      <h1>Teams</h1>
      {teams.map((team) => {
        return <TeamList key={team.id} id={team.id} {...team} />;
      })}
    </div>
  );
}

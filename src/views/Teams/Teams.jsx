import { useState, useEffect } from 'react';
import './Teams.css';
import TeamList from '../../components/TeamList/TeamList';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Teams</h1>
      {teams.map((team) => {
        return <TeamList key={team.id} {...team} />;
      })}
    </>
  );
}

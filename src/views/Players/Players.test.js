import { render } from '@testing-library/react';
import PlayerList from '../../components/PlayerList/PlayerList';
import { BrowserRouter } from 'react-router-dom';

test('renders the PlayerList component', () => {
  const container = render(
    <BrowserRouter>
      <h1>Players</h1>
      <PlayerList
        id="1"
        player={{
          created_at: '2021-11-22T20:11:15+00:00',
          id: 1,
          name: 'Bennie Jetts',
          position: 'Pitcher',
          team_id: 1,
        }}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import PlayerDetail from '../../components/PlayerDetail/PlayerDetail';
import { BrowserRouter } from 'react-router-dom';

test('renders the PlayerDetail component', () => {
  const container = render(
    <BrowserRouter>
      <PlayerDetail
        id="1"
        player={{
          created_at: '2021-11-22T20:11:15+00:00',
          id: 1,
          name: 'Bennie Jetts',
          position: 'Pitcher',
          team_id: 1,
          teams: {
            id: 1,
            name: 'Bridge City Sneakers',
            created_at: '2021-11-22T20:07:58+00:00',
            city: 'Portland',
            state: 'OR',
          },
        }}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

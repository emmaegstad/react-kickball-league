import { render } from '@testing-library/react';
import TeamDetail from '../../components/TeamDetail/TeamDetail';
import { BrowserRouter } from 'react-router-dom';

test('renders the TeamDetail component', () => {
  const container = render(
    <BrowserRouter>
      <TeamDetail
        id="3"
        team={{
          city: 'Lake Oswego',
          created_at: '2021-11-22T20:08:43+00:00',
          id: 3,
          name: 'Lakeville Thunderfeet',
          players: [
            {
              created_at: '2021-11-28T04:53:23+00:00',
              id: 10,
              name: 'Jayne Phonda',
              position: 'Catcher',
              team_id: 3,
            },
          ],
        }}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

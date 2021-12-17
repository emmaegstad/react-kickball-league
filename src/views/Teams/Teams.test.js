import { render } from '@testing-library/react';
import TeamList from '../../components/TeamList/TeamList';
import { BrowserRouter } from 'react-router-dom';

test('renders the TeamList component', () => {
  const container = render(
    <BrowserRouter>
      <BrowserRouter>
        <h1>Players</h1>
        <TeamList
          team={{
            city: 'Vancouver',
            created_at: '2021-11-22T23:16:31+00:00',
            id: 5,
            name: 'Vancougers',
            state: 'WA',
          }}
        />
      </BrowserRouter>
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import Home from './Home';

test('renders the Home component', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});

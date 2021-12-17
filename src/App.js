import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Team from './views/Team/Team';
import Players from './views/Players/Players';
import Player from './views/Player/Player';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Teams">Teams</NavLink>
          <NavLink to="/Players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Teams" component={Teams} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Players" component={Players} />
          <Route exact path="/Player" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

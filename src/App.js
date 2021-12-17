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
        <header className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Teams">Teams</NavLink>
          <NavLink to="/Players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

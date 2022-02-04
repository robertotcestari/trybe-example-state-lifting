import './App.css';
import Header from './components/Header';
import Game from './pages/Game';
import Profile from './pages/Profile';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/perfil" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

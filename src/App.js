import './App.css';
import Header from './Components/Header/Header.js';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;

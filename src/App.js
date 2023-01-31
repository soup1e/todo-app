import './App.css';
import Header from './Components/Header/Header.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth.js';
import Todos from './Components/Todos/Todos.js';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />

        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

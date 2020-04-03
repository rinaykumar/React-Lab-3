import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

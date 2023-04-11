import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/login/login.jsx';
import Register from './components/registro/register.jsx';
import usersList from './components/dashboard/usersList.jsx';


function Router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/UsersList" component={usersList} />
      </Switch>
    </Router>
  );
}

export default Router;

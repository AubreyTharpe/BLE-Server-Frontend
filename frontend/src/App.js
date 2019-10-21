import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="d-flex w-100">
            <div className="ml-3 mr-auto">
              <Link to="/home">Home Dashboard</Link>
            </div>
            <div className="mr-3">
              <Link to="/home/about">About</Link>
            </div>
          </div>
        </header>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home/about">
            <About />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import Register from './Register'
import Login from './Login'
import LandingPage from './LandingPage.js'

class App extends React.Component {
  render() {
      return (
          <Router>
              <div className="app">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                      <a className="navbar-brand" href="#">Chatting</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                              data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                              aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarsExample09">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/login" className="nav-link">Login</Link>
                              </li>
                              <li className="nav-item">
                                  <Link to="/register" className="nav-link">Register</Link>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
              <switch>
                  <Route path="/" exact render = {() => <LandingPage />} />
                  <Route path="/login" exact component = {Login} />
                  <Route path="/register" exact component = {Register} />
              </switch>
          </Router>
      );
  }
}


export default App;

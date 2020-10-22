import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/App.css';
import Navbar from './navbar/NavBar';
import Register from './Auth/Register';
import Login from './Auth/Login';
import LandingPage from './LandingPage/LandingPage.js';
import firebase, { auth } from '../config/firebase';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username : ''
      }
  }

  componentDidMount() {
      auth.onAuthStateChanged(username => {
          console.log(username);
          if(username) {
              this.setState({ username })
          }
      });
  }

  logOut = () => {
      firebase.auth().signOut().then(window.location = "/");
  }

  render() {
      return (
          <Router>
              <div className="app">
                  <Navbar username={this.state.username} logOut={this.logOut}/>
              </div>
              <Switch>
                  <Route path="/" exact render = {() => <LandingPage />} />
                  <Route path="/login" exact component = {Login} />
                  <Route path="/register" exact component = {Register} />
              </Switch>
          </Router>
      );
  }
}
export default App;

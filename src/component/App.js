import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/App.css';
import Navbar from './Navbar';
import Register from './Auth/Register';
import Login from './Auth/Login';
import LandingPage from './LandingPage';
import ChatRoom from "./ChatRoom";
import firebase, { auth } from '../config/firebase';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username : ''
      }
      this.logOut.bind(this);
  }

  componentDidMount() {
      auth.onAuthStateChanged(username => {
          if(username) {
              this.setState({ username })
          }
      });
  }

  logOut() {
      firebase.auth().signOut().then(() => {
          window.location = "/"
      });
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
                  <Route path="/chat-room" render = {() => <ChatRoom username={this.state.username} /> } />
              </Switch>
          </Router>
      );
  }
}
export default App;

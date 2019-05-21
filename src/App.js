import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// import NavbarMenu from './components/Navbar';
// import UserProfile from './components/UserProfile';
import Logination from './components/auth/logination/logination';
import RegistrationContainer from './components/auth/registration/registration-container';
import AuthService from './services/auth-servise';
import NotFound from './components/system/not-found/not-found';
import LoginationContainer from './components/auth/logination/logination-container';
import TodoContainer from './components/system/todo/todo-container';




class App extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        AuthService.isAuthenticated() === true
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    )
    const PrivateRoute1 = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        AuthService.isAuthenticated() === false
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )
    
    return (
      <Router>
      <div className="app">
      {/* <NavbarMenu /> */}
      <Switch>
        <PrivateRoute exact path="/" component={TodoContainer} />
        <PrivateRoute1 path="/registration" component={RegistrationContainer} />
        <PrivateRoute1 path="/login" component={LoginationContainer} />
        {/* <Route path="/profile" component={UserProfile} /> */}
        <Route component={NotFound} />
      </Switch>
      </div>
      </Router>
      );
    }
  }
  
  
  
  export default App;
  
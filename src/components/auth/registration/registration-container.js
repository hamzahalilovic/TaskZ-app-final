import React from 'react'
import axios from 'axios';
import Registration from './registration';
import objectHash from 'object-hash'
import {Route, Redirect} from 'react-router-dom';
import AuthService from '../../../services/auth-servise';

class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      messageText: "",
      alertType: "danger",
      user: null
    }
    this.signUp = this
      .signUp
      .bind(this)
    this.handleSignUp = this
      .handleSignUp
      .bind(this)
    this.showMessage = this
      .showMessage
      .bind(this)
  }

  showMessage(visible, messageText, alertType) {
    this.setState({visible, messageText, alertType})
    setTimeout(() => {
      this.setState({visible: false})
    }, 3000)
  }

  handleSignUp(user) {
    this.setState({user})
    let hash = objectHash(user.password);
    let checkedUser
    user.password = hash
    checkedUser = AuthService
      .getUsers()
      .then(res => {
        return res.filter(el => {
          return el.email === user.email
        });
      })
      .then(user => {
        if (user.length > 0) {
          if (this.state.user.email === user[0].email) {
            this.showMessage(true, "This user already exist. Please login!", "danger")
          } else {
            this.signUp()
          }
        } else {
          this.signUp()
        }

      })

  }

  signUp() {
    AuthService
      .signUp(this.state.user)
      .then(this.showMessage(true, "Success! Redirection to login page", "success"))
      .then(setTimeout(() => {
        this
          .props
          .history
          .push("/")
      }, 4000))
  }

  render() {
    return (<Registration
      onSubmit={this.handleSignUp}
      visible={this.state.visible}
      messageText={this.state.messageText}
      alertType={this.state.alertType}/>)
  }
}

export default RegistrationContainer
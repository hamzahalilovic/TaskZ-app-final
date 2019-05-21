import React from 'react'
import objectHash from 'object-hash'
// import { SubmissionError } from 'redux-form';
import AuthService from '../../../services/auth-servise';
import Logination from './logination';

class LoginationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            messageText: "",
            user: null
        }
        
        this.showMessage = this.showMessage.bind(this)
        this.logIn = this.logIn.bind(this)
    }
    
    logIn(user) {
        let hash = objectHash(user.password)
        AuthService
        .getUsers()
        .then(res => {
            return res.filter(el => {
                return el.email === user.email
            })
        })
        .then(user => {
            if (user.length <= 0) {
                this.showMessage(true, ["User does not exist! ", "Please register or enter a correct data."])
            } else {
                if (hash !== user[0].password) {
                    this.showMessage(true, ["Wrong password! ", "Please enter a correct data."])
                } else {
                    AuthService.logIn(user[0])
                    this
                    .props
                    .history
                    .push("/")
                }
            }
            
        })
        
        // AuthService.logIn(user)
    }
    
    showMessage(visible, messageText) {
        this.setState({visible, messageText})
        setTimeout(() => {
            this.setState({visible: false})
        }, 5000)
    }
    
    render() {
        return (<Logination
            onSubmit={this.logIn}
            borderClass={this.state.borderClass}
            visible={this.state.visible}
            messageText={this.state.messageText}/>)
        }
    }
    
    export default LoginationContainer
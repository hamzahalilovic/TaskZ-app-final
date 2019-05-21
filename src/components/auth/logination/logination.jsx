import React from 'react';
import {Button, Card, CardBody, ModalFooter, Col} from 'mdbreact';
import {Alert} from 'reactstrap';
import {Link, Redirect, Route} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

import '../logination/logination.css'
import {validateLogIn} from '../../../validate';

class Logination extends React.Component {

  renderField = ({
    input,
    className,
    placeholder,
    type,
    meta: {
      touched,
      error,
      warning
    }
  }) => (
    <div>
      <input {...input} placeholder={placeholder} className={className} type={type}/> {touched && ((error && <span className="input-error">{error}</span>) || (warning && <span className="input-error">{warning}</span>))}
    </div>
  )

  render() {
    const {
      handleSubmit,
      submitting,
      pristine,
      reset,
      error,
      asyncError
    } = this.props;
    return (
      <div className="logination">
        <div className="logination-form">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">SIGN IN</p>
                <Alert
                  color="danger"
                  isOpen={this.props.visible}
                  fade={true}
                  className="message-alert">
                  <strong>{this.props.messageText[0]}
                  </strong>
                  {this.props.messageText[1]}
                </Alert>
                <div className="grey-text">
                  <Field
                    name="email"
                    placeholder="Your e-mail"
                    type="email"
                    autoFocus="true"
                    component={this.renderField}/>
                  <Field
                    name="password"
                    placeholder="Your password"
                    type="password"
                    className="password"
                    component={this.renderField}/>
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="green" type="submit">
                    Login
                  </Button>
                </div>
              </form>
              <ModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Not a member?
                  <span className="blue-text ml-1">
                    <Link to="/registration">
                      Sign Up
                    </Link>
                  </span>
                </p>
              </ModalFooter>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
};

Logination = reduxForm({form: 'login', validate: validateLogIn})(Logination)

export default Logination

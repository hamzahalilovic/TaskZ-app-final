import React from 'react'
import {Button, Card, CardBody, ModalFooter} from 'mdbreact'
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

import {faPen, faTrash, faSave} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import '../registration/registration.css'
import {validateSignUp} from '../../../validate';

library.add(faPen)
library.add(faTrash)
library.add(faSave)

class Registration extends React.Component {

  renderField = ({
    input,
    label,
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
      <div>
        <input {...input} placeholder={placeholder} className={className} type={type}/> {touched && ((error && <div className="input-error">{error}</div>))}
      </div>
    </div>
  );

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
      <div className="registration">
        <div className="registration-form">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">SIGN UP</p>
                <Alert
                  color={this.props.alertType}
                  isOpen={this.props.visible}
                  fade={true}
                  className="message-alert">
                  <strong>
                    {this.props.messageText}
                  </strong>
                </Alert>
                <div className="grey-text">
                  {/* <FontAwesomeIcon className="icon" icon="pen"/> */}
                  <Field
                    name="firstName"
                    className="inputs-form"
                    placeholder="Your name"
                    autoFocus="true"
                    required
                    component={this.renderField}/>
                  <Field
                    name="lastName"
                    className="inputs-form"
                    placeholder="Your second name"
                    autoFocus="true"
                    required
                    component={this.renderField}/>
                  <Field
                    name="email"
                    className="inputs-form"
                    placeholder="Your e-mail"
                    type="email"
                    required="true"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    component={this.renderField}/>
                  <Field
                    className="inputs-form password"
                    name="password"
                    placeholder="Your password"
                    type="password"
                    required
                    component={this.renderField}/>
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="green" type="submit">Register</Button>
                </div>
              </form>
              <ModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Already user?
                  <span className="blue-text ml-1">
                    <Link to="/login">
                      Sign In
                    </Link>
                  </span>
                </p>
              </ModalFooter>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }

}

export default reduxForm({form: 'registration', destroyOnUnmount: true, validate: validateSignUp, enableReinitialize: true})(Registration)
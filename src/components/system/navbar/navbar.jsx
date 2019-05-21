import React from 'react';
import "./navbar.css"

import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSignOutAlt, faCodeBranch, faBookmark } from '@fortawesome/free-solid-svg-icons'
  
  import AuthService from '../../../services/auth-servise';



  
  export default class Example extends React.Component {
    constructor(props) {
      super(props);
      
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    //   logOut() {
    //     firebase.auth().signOut().then(function () {
    //         // Sign-out successful.
    //         // browserHistory.push(`/login/`)
    //     }).catch(function (error) {
    //         // An error happened.
    //     });
    // }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      let user = localStorage.getItem('user');gi
      return (
        <div>
        <Navbar dark expand="md">
        <NavbarBrand >
        <Link to="/" className="navbar-logo">
        <FontAwesomeIcon className="navbar-icon" icon={faBookmark} />
        TaskZ
        </Link>
        </NavbarBrand>
        
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink className="user-greed">
        Hello, {user} |
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
        
        <a href="https://github.com/hamzahalilovic/TaskZ-app-final" target="_blank"> 
        <FontAwesomeIcon className="navbar-icon" icon={faCodeBranch} />
        GitHub
        </a>
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
        <Link to="/login" onClick={AuthService.logOut}>
        <FontAwesomeIcon className="navbar-icon" icon={faSignOutAlt} />
        Logout
        </Link>
        </NavLink>
        </NavItem>
        {/* <UncontrolledDropdown nav inNavbar >
          <DropdownToggle nav caret>
          Hello, admin
          </DropdownToggle>
          <DropdownMenu right className="navbar-dropdown-menu">
          <DropdownItem>
          <a href="https://github.com/hamzahalilovic/TaskZ-app-final">GitHub</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
          <Link to="/login" onClick={AuthService.logOut}>Logout</Link>
          </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        </Nav>
        </Collapse>
        </Navbar>
        </div>
        );
      }
    }
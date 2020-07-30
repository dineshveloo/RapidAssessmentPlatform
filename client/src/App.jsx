import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact';
import './App.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, loginUser } from './actions/authActions';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import store from "./store";
import { Provider } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

toast.configure()
class App extends Component {
  constructor() {
    super();
    this.state = {
      collapseID: '',
      loading: true,
      role: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({ role: localStorage.role })
    }
  }

  logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('role');
    window.location.href = "./signin";
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    const { collapseID, role } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <div className='flyout'>
            <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                <strong className='align-middle'>RAPID ASSESSMENT PLATFORM</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('mainNavbarCollapse')}
              />
              <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                  {role === 'admin' ? null :
                    <MDBNavItem>
                      <MDBLink to='/'>About</MDBLink>
                    </MDBNavItem>
                  }
                  {role === 'admin' ? null :
                    <MDBNavItem >
                      <MDBLink to='/'>Contact</MDBLink>
                    </MDBNavItem>
                  }
                  {role === 'admin' ? <MDBNavItem >
                    <MDBLink to='/accessmanagement'>Access Management</MDBLink>
                  </MDBNavItem>
                    : null}
                  {this.props.auth.isAuthenticated ?
                    <MDBNavItem >
                      <MDBLink to="" onClick={this.logoutHandler}>Logout</MDBLink>
                    </MDBNavItem>
                    : null}
                  <MDBNavItem>
                    <MDBLink className='waves-effect waves-light' to='#!'>
                      <MDBIcon brand icon='twitter' />
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink className='waves-effect waves-light' to='#!'>
                      <MDBIcon brand icon='google-plus' />
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <MDBIcon icon='user' />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu right>
                        <MDBDropdownItem href='/signin'>
                          SignIn
                      </MDBDropdownItem>
                        <MDBDropdownItem href='/emailConfirm'>
                          Request / Register
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {collapseID && overlay}
            <main style={{ marginTop: '4rem' }}>
              <Routes />
            </main>
            <MDBFooter color='indigo'>
              <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()}
                <a href='https://www.mphasis.com'> Mphasis. </a> All rights reserved
            </p>
            </MDBFooter>
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(App);

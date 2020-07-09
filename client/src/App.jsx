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
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import store from "./store";
import { Provider } from "react-redux";
import { API_URL } from './config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      loading: true
    };
    //toast('hi');
  }


  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }

  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  onChangeLogoutHandler = e => {
    e.preventDefault();
    store.dispatch(logoutUser());
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
    const { collapseID } = this.state;

    //let isLogin = localStorage.getItem('jwtToken');
    // if(isLogin === null){
    //   isLogin = 0;
    // }else{
    //   isLogin = localStorage.getItem('jwtToken');
    // }
    
    return (
      <Provider store={store}>
        <Router>
          <div className='flyout'>
            <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                <strong className='align-middle'>Mphasis</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('mainNavbarCollapse')}
              />
              <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBLink to='/'>Home</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-none d-md-inline'>Rapid Process Discovery</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className='dropdown-default' right>
                        <MDBDropdownItem href='#!'>Capture Process</MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          View Process
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Approve Process
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Process Prioritization
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Upload/Download Process
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-none d-md-inline'>Process Flow</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className='dropdown-default' right>
                        <MDBDropdownItem href='#!'>Capture Process Flow</MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          View Process Flow
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-none d-md-inline'>Business Case & Roadmap</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className='dropdown-default' right>
                        <MDBDropdownItem href='#!'>Select</MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          View
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-none d-md-inline'>User Management</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className='dropdown-default' right>
                        <MDBDropdownItem href='#!'>User Management Home</MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Create User
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          View Users
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-none d-md-inline'>Configuration Details</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className='dropdown-default' right>
                        <MDBDropdownItem href='#!'>Automation Anywhere</MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          UiPath
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Pega Robotics
                      </MDBDropdownItem>
                        <MDBDropdownItem href='#!'>
                          Blue Prism
                      </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='/'>About</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem >
                    <MDBLink to='/'>Contact</MDBLink>
                  </MDBNavItem>
                  {/* {isLogin === 0 ? null:  */}
                  <MDBNavItem >
                    <MDBLink>Logout</MDBLink>
                  </MDBNavItem>
                  {/* } */}
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
                          Register
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

export default App;

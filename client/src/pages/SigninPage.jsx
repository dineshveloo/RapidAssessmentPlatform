import React, { Component } from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBAnimation
} from 'mdbreact';
//import classnames from "classnames";
import { loginUser } from '../actions/authActions';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
//import SigninConext from '../context/SigninConext';
//import './global.css';
import { toast } from 'react-toastify';

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
  //authenticated: false
}
class SigninPage extends Component {
  constructor() {
    super();
    this.state = initialState;

  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    // console.log(this.props.auth.isAuthenticated);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  validate = () => {
    //debugger;
    let emailError = "", passwordError = ""

    if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
      emailError = 'please enter a valid email address';
    }
    if (!this.state.password) {
      passwordError = 'password cannot be empty';
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }

  onChange = e => {
    switch (e.target.id) {
      case 'email': this.setState({ emailError: '' });
        break;
      case 'password': this.setState({ passwordError: '' });
        break;
      default:
        break;
    }
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.email)
  };

  forgetHandler = () => {
    if (this.state.email.length <= 0) {
      toast('please enter approved email id to proceed');
    } else {
      this.props.history.push('/resetpassword')
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData);
      //this.setState({ authenticated: true}, ()=>(console.log(authenticated)))
    }
  };

  render() {
    const { emailError, passwordError } = this.state;

    let isEnabledCheck = emailError || passwordError;
    let isEnabled = false;

    if (isEnabledCheck.length > 0) {
      isEnabled = true;
    } else {
      isEnabled = false;
    }

    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <MDBAnimation type='zoomIn' duration='500ms'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='8' className='mt-3 mx-auto'>
                <MDBJumbotron>
                  <h1 className='text-center'>
                    <MDBIcon icon='edit' className='indigo-text mr-2' />
                    Sign in
                  </h1>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='grey-text'>
                      <MDBInput
                        onChange={this.onChange}
                        value={this.state.email}
                        id="email"
                        type="email"
                        label='Type your email'
                        icon='envelope'
                        group
                        validate
                        success='right'
                        required
                      />
                      <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.emailError}</div>
                      <MDBInput
                        onChange={this.onChange}
                        value={this.state.password}
                        id="password"
                        type="password"
                        label='Type your password'
                        icon='lock'
                        group
                        validate
                        required
                      />
                      <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.passwordError}</div>
                    </div>
                    <div className='text-center'>
                      {/* <SigninConext.Provider
                          value={{
                          authenticated: this.state.authenticated,
                          login: this.onSubmit
                        }}
                      > */}
                      <MDBBtn type="submit" disabled={isEnabled}>
                        Login
                        </MDBBtn>
                      {/* </SigninConext.Provider> */}
                      <div className='text-center' disabled={isEnabled}>
                        <Link to="#" onClick={this.forgetHandler}>Forgot Password ?</Link>
                      </div>
                    </div>
                  </form>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBAnimation>
      </>
    );
  }
}

SigninPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { loginUser }
)(SigninPage);

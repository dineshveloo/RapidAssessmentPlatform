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

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
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
  };

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData);
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

                      <MDBBtn type="submit" disabled={isEnabled}>
                        Login
                        </MDBBtn>
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

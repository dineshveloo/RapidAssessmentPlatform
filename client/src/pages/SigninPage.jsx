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
import { loginUser } from '../actions/authActions';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
//import ResetPass from '../context/ResetPass';

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  authenticated_: false
  //email_: ''
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



  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      //this.props.history.push("/");
      window.location.href = '/'
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
    //console.log(this.state.email)
  };

  forgetHandler = () => {
    if (this.state.email.length <= 0) {
      toast('please enter approved email id to proceed');
    } else {
      //console.log(value);
      // this.setState({ email_: 'anu' })
      fetch('http://18.191.23.96:5000/api/users/emailExist/' + this.state.email)
        .then(res => res.json())
        .then(json => {

          console.log(json);
          if (json.status === 1) {
            localStorage.setItem("resetEmail", this.state.email);
            this.props.history.push('/resetpassword')
          } else {
            toast('not a registered user');
          }

        }
        )

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
    // const { email, reset } = useContext(ResetPass);
    //const resetpassword = useContext(ResetPass);

    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <MDBAnimation type='zoomIn' duration='500ms'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='8' className='mt-3 mx-auto'>
                {/* <ResetPass.Provider
                          value={{
                            email: 'nncnggggggggggggggggggggggggggggggggggggggggg'
                          }}
                        > */}
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

                      <div className='text-center' disabled={isEnabled}>
                        {/* <button onClick={() => reset("jp")}>
                              Switch Language (Current: {email})
                            </button> */}

                        <Link to="#" onClick={this.forgetHandler}>Forgot Password ?</Link>
                      </div>
                    </div>
                  </form>
                </MDBJumbotron>
                {/* </ResetPass.Provider> */}
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

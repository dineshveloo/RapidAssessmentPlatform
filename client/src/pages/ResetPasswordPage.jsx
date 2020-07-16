import React, { Component } from 'react';
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBIcon,
    MDBAnimation,
    MDBInput,
    MDBBtn
} from 'mdbreact';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { RegisterUser } from '../actions/authActions';
//import classnames from "classnames";
const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
}

class ResetPasswordPage extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/register");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    // validate = () => {
    //     //debugger;
    //     let nameError = "", emailError = "", passwordError = "", password2Error = ""
    //     if (!this.state.name) {
    //         nameError = 'name cannot be blank';
    //     }
    //     if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
    //         emailError = 'please enter a valid email address';
    //     }
    //     if (this.state.password.length < 6 || this.state.password === this.state.name || this.state.password === this.state.email) {
    //         passwordError = 'password must aleast 6 character';
    //     }
    //     else if (this.state.password2 !== this.state.password) {
    //         password2Error = 'Passwords must match';
    //     }


    //     if (emailError || nameError || passwordError || password2Error) {
    //         this.setState({ emailError, nameError, passwordError, password2Error });
    //         return false;
    //     }
    //     return true;
    // }

    onChange = e => {

        //alert(e.target.id);
        // switch (e.target.id) {
        //     case 'name': this.setState({ nameError: '' });
        //         break;
        //     case 'email': this.setState({ emailError: '' });
        //         break;
        //     case 'password': this.setState({ passwordError: '' });
        //         break;
        //     case 'password2': this.setState({ password2Error: '' });
        //         break;
        //     default:
        //         break;
        // }
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
            };
            this.props.RegisterUser(newUser, this.props.history);
            //reset form
            this.setState({ initialState });
        }
    };
    render() {
        const { emailError, passwordError } = this.state;
        let isEnabledCheck = emailError || passwordError;
        let isEnabled= false;
        if (isEnabledCheck.length > 0) {
            isEnabled = true;
        }else{
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
                                         Reset Password
                                    </h1>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className='grey-text'>
                                            <MDBInput
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                id="name"
                                                type="text"
                                                label='Your name'
                                                icon='user'
                                                group
                                                validate
                                                success='right'
                                                required

                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.nameError}</div>
                                            <MDBInput
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                id="email"
                                                type="email"
                                                label='Your email'
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
                                                label='New password'
                                                icon='lock'
                                                group
                                                validate
                                                success='right'
                                                required
                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.passwordError}</div>
                                            <MDBInput
                                                onChange={this.onChange}
                                                value={this.state.password2}
                                                id="password2"
                                                type="password"
                                                label='Confirm new password'
                                                icon='exclamation-triangle'
                                                group
                                                validate
                                                success='right'
                                                required
                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.password2Error}</div>
                                        </div>
                                        <div className='text-center'>
                                            <MDBBtn color='primary' type="submit" disabled={isEnabled}>Reset</MDBBtn>
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
ResetPasswordPage.propTypes = {
    RegisterUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { RegisterUser }
)(withRouter(ResetPasswordPage));


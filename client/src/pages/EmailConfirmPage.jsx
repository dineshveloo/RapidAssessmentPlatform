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
import { API_URL } from '../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EmailConfirmPage extends Component {
    state = {
        name: '',
        email: '',
        company: '',
        msg: '',
        nameError: '',
        emailError: '',
        companyError: '',
        status: 0
    }

    validate = () => {
        //debugger;
        let nameError = "", emailError = "", companyError = ""
        if (!this.state.name) {
            nameError = 'name cannot be empty';
        }

        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            emailError = 'please enter a valid email address';
        }
        if (!this.state.company) {
            companyError = 'company cannot be empty';
        }

        if (nameError || emailError || companyError) {
            this.setState({ nameError, emailError, companyError });
            return false;
        }
        return true;
    }

    onSubmit = event => {
        // this.form.reset();
        event.preventDefault()
        const isValid = this.validate();
        const headers = {

            // "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers" : "Content-Type",
            // "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
          }
        if (isValid) {
            fetch(`${API_URL}/api/users/confirm`, {
                method: 'post',
                headers:headers,      
                body: JSON.stringify(
                    {
                        email: event.target.email.value,
                        name: event.target.name.value,
                        company: event.target.company.value
                    })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 1) {
                        this.setState({ msg: data.msg })
                        this.setState({ status: data.status })
                        //console.log(data)
                        toast(data.msg);

                    } else if (data.status === 0) {
                        toast(data.msg);
                    }
                    else if (data.status === -1) {
                        toast(data.msg);
                    }
                    else if(data.status === 3){
                        toast(data.msg);
                    }
                    else if (data.status === 2) {
                        toast(data.msg);
                        this.props.history.push("/register");
                    }
                })
                .catch(err => console.log(err))
        }

    }

    changeHandler = event => {
        switch (event.target.id) {
            case 'name': this.setState({ nameError: '' });
                break;
            case 'email': this.setState({ emailError: '' });
                break;
            case 'company': this.setState({ companyError: '' });
                break;
            default:
                break;
        }
        this.setState({ [event.target.id]: event.target.value });
    };

    render() {
        const { nameError, emailError, companyError } = this.state;
        let isEnabledCheck = emailError || companyError || nameError;
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
                                        Request Access to Rapid Assesment Platform
                                    </h1>
                                    <form onSubmit={this.onSubmit} className="emailForm" >
                                        <div className='grey-text'>
                                            <MDBInput
                                                name='text'
                                                id="name"
                                                label='Your name'
                                                icon='user'
                                                group
                                                type='text'
                                                success='right'
                                                value={this.state.name}
                                                onChange={this.changeHandler}
                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.nameError}</div>
                                        </div>

                                        <div className='grey-text'>
                                            <MDBInput
                                                name='email'
                                                id="email"
                                                label='Your email'
                                                icon='envelope'
                                                group
                                                type='email'
                                                success='right'
                                                value={this.state.email}
                                                onChange={this.changeHandler}
                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.emailError}</div>
                                        </div>

                                        <div className='grey-text'>
                                            <MDBInput
                                                name='text'
                                                id="company"
                                                label='Your company name'
                                                icon='pencil-alt'
                                                group
                                                type='text'
                                                success='right'
                                                value={this.state.company}
                                                onChange={this.changeHandler}
                                            />
                                            <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.companyError}</div>
                                        </div>
                                        <div className='text-center'>
                                            <MDBBtn outline color='info' type='submit' disabled={isEnabled}>
                                                Send<MDBIcon icon='paper-plane' className='ml-1' />

                                            </MDBBtn>
                                        </div>
                                        <div className='text-center'>
                                        if your email has been confirmed by the admin? please click <a href='/register'> here</a> to register.
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

export default EmailConfirmPage;

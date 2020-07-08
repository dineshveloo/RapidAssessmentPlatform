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
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

class EmailConfirmPage extends Component {
    state = {
        name: '',
        email: '',
        company: '',
        msg: '',
        status: 0
    }

    onSubmit = event => {
        event.preventDefault()

        fetch(`${API_URL}/api/users/confirm`, {
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: event.target.email.value,
                    name: event.target.name.value,
                    company: event.target.company.value
                })
        })
            .then(res => res.json())
            .then(data => {

                this.setState({ msg: data.msg })
                this.setState({ status: data.status })
                //console.log(data)
                //toast(data.msg);
                if (data.status === '1') {
                    this.props.history.push("/register");
                }
                // this.form.reset()
            })
            .catch(err => console.log(err))
    }

    changeHandler = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    render() {
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
                                        Request access to Rapid Assesment Platform
                                    </h1>
                                    <form onSubmit={this.onSubmit} className="emailForm">
                                        <div className='grey-text'>
                                            <MDBInput
                                                name='text'
                                                id="name"
                                                required
                                                label='Your name'
                                                icon='user'
                                                group
                                                type='text'
                                                validate
                                                error='wrong'
                                                success='right'
                                                value={this.state.name}
                                                onChange={this.changeHandler}
                                            />
                                        </div>

                                        <div className='grey-text'>
                                            <MDBInput
                                                name='email'
                                                id="email"
                                                required
                                                label='Your email'
                                                icon='envelope'
                                                group
                                                type='email'
                                                validate
                                                error='wrong'
                                                success='right'
                                                value={this.state.email}
                                                onChange={this.changeHandler}
                                            />
                                        </div>

                                        <div className='grey-text'>
                                            <MDBInput
                                                name='text'
                                                id="company"
                                                required
                                                label='Your company name'
                                                icon='pencil-alt'
                                                group
                                                type='text'
                                                validate
                                                error='wrong'
                                                success='right'
                                                value={this.state.company}
                                                onChange={this.changeHandler}
                                            />
                                        </div>
                                        <div className='text-center'>
                                            <MDBBtn outline color='info' type='submit'>
                                                Send<MDBIcon icon='paper-plane' className='ml-1' />
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

export default EmailConfirmPage;

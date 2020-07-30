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
    MDBAnimation,
    MDBInputGroup
} from 'mdbreact';
import 'react-toastify/dist/ReactToastify.css';
import { confirmUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SelectCompany from "../components/SelectCompany";

class EmailConfirmPage extends Component {
    state = {
        name: '',
        email: '',
        company: [],
        selectedCompany: '',
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
        if (!this.state.selectedCompany) {
            companyError = 'company cannot be empty';
        }

        if (nameError || emailError || companyError) {
            this.setState({ nameError, emailError, companyError });
            return false;
        }
        return true;
    }

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const newUser = {
                email: e.target.email.value,
                name: e.target.name.value,
                company: this.state.selectedCompany
            };
            
            this.props.confirmUser(newUser, this.props.history);
            console.log(confirmUser);
            //reset form
            // this.setState({ initialState });
        }
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ selectedCompany: event.target.value , companyError: ''});
        //console.log(event.target.value);
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

    componentDidMount() {
        fetch('http://localhost:5000/api/users/companynames')

            .then(res => res.json())
            .then(json => {
                this.setState({ company: json.names });
                console.log(this.state.company);
            }
            )
    }

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

                                        <div>
                                        <MDBInputGroup
                                            // icon='pencil-alt'
                                            containerClassName='mb-3'
                                            prepend='Company Name'
                                            inputs={
                                                <SelectCompany className='custom-select'
                                                    company={this.state.company}
                                                    changeValue={this.handleChange}
                                                //assignRole={this.assignHandler}
                                                //disabled={this.state.checkbox1.checked}
                                                //isCompanySelected={this.state.selectedCompany.length > 0 ? this.state.selectedCompany : ''}
                                                />

                                            }

                                        />
                                        <div style={{ fontSize: 13, paddingLeft: 42, color: "red" }}>{this.state.companyError}</div>
                                        </div>
                                       

                                        {/* 
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
                                        </div> */}


                                        <div className='text-center'>
                                            <MDBBtn outline color='info' type='submit' >
                                                Send<MDBIcon icon='paper-plane' className='ml-1' />
                                            </MDBBtn>
                                        </div>
                                        <div className='text-center'>

                                            if your email has been confirmed by the admin? please click  <a href='/register'> here </a> to register.

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

EmailConfirmPage.propTypes = {
    confirmUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { confirmUser }
)(withRouter(EmailConfirmPage));

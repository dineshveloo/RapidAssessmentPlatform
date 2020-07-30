import React, { Component } from 'react';
import {

    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
// import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './HomePage.css';
import SectionContainer from '../components/sectionContainer';
import { CaptureProcess, CaptureUpdate } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const initialState = {
    clientName: "",
    businessUnit: "",
    subBusinessUnit: "",
    processName: "",
    processDescription: "",
    list: "",
    msg: "",
    status: 0,
    isEditabled: false,
    processId: ''

}

class CaptureProcessPage extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    componentDidMount() {

        if (this.props.location.state) {
            console.log("property_id", this.props.location.state.selectedrow);
            const res = this.props.location.state.selectedrow;
            console.log(res);
            this.setState({
                processId: res._id,
                clientName: res.clientName,
                businessUnit: res.businessUnit,
                subBusinessUnit: res.subBusinessUnit,
                processName: res.processName,
                processDescription: res.processDescription,
                list: res.list,
                isEditabled: true
            })

        }
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log("here");

        if (this.state.processId.length > 0) {
            const newProcess = {
                processId: this.state.processId,
                clientName: this.state.clientName,
                businessUnit: this.state.businessUnit,
                subBusinessUnit: this.state.subBusinessUnit,
                processName: this.state.processName,
                processDescription: this.state.processDescription,
                list: this.state.list
            };
            this.props.CaptureUpdate(newProcess, this.props.history);
            this.setState({processId: ''})
        } else {

            const newProcess = {
                clientName: this.state.clientName,
                businessUnit: this.state.businessUnit,
                subBusinessUnit: this.state.subBusinessUnit,
                processName: this.state.processName,
                processDescription: this.state.processDescription,
                list: this.state.list
            };
            this.props.CaptureProcess(newProcess, this.props.history);
        }



        //console.log(newProcess);
        this.setState({ clientName: "", businessUnit: "", subBusinessUnit: "", processName: "", processDescription: "", list: "" });
    };

    onChange = e => {
        //console.log('i m here');
        this.setState({ [e.target.id]: e.target.value });
    };

    enableEdit = e => {
        //console.log()
        this.setState({ isEditabled: false })
    }
    refreshHandler = e => {
        //console.log()
        this.setState({ clientName: "", businessUnit: "", subBusinessUnit: "", processName: "", processDescription: "", list: "", isEditabled: false, processId:'' });
    }

    render() {
        // const { emailError, passwordError } = this.state;
        // let isEnabledCheck = emailError || passwordError;
        // let isEnabled = false;
        return (
            <MDBContainer className='mt-5'>

                <SectionContainer header='Capture Process'>
                    <form noValidate onSubmit={this.onSubmit}>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Client Name'
                                    onChange={this.onChange}
                                    value={this.state.clientName}
                                    id="clientName"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                    disabled={this.state.isEditabled}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Business Unit'
                                    onChange={this.onChange}
                                    value={this.state.businessUnit}
                                    id="businessUnit"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                    disabled={this.state.isEditabled}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Sub Business Unit'
                                    onChange={this.onChange}
                                    value={this.state.subBusinessUnit}
                                    id="subBusinessUnit"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                    disabled={this.state.isEditabled}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Process Name'
                                    onChange={this.onChange}
                                    value={this.state.processName}
                                    id="processName"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                    disabled={this.state.isEditabled}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Process Description'
                                    onChange={this.onChange}
                                    value={this.state.processDescription}
                                    id="processDescription"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                    disabled={this.state.isEditabled}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    type='textarea'
                                    onChange={this.onChange}
                                    value={this.state.list}
                                    label='List the current pain points'
                                    id="list"
                                    rows='2'
                                />
                            </MDBCol>
                        </MDBRow>

        <MDBBtn type="submit">{this.state.processId.length > 0 ? 'Update Assessment':'Submit Assessment'}</MDBBtn>
                        <MDBBtn onClick={this.enableEdit}>Enable Edit </MDBBtn>
                        <MDBBtn onClick={this.refreshHandler}>Refresh</MDBBtn>

                        <div id="capturelink" className='text-center'>

                            <b>Do you want to Capture another process?! Please click<a href='/captureprocesspage1'> <MDBIcon icon='edit' className='indigo-text' /> </a>to Capture.</b>

                        </div>
                        <div id="viewlink" className='text-center'>

                            <b>Please click<a href='/viewprocess'> <MDBIcon icon='eye' className='indigo-text' /> </a>to View the Captured Process.</b>

                        </div>
                    </form>
                </SectionContainer>


            </MDBContainer>
        );
    }
}

CaptureProcessPage.propTypes = {
    CaptureProcess: PropTypes.func.isRequired,
    CaptureUpdate:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { CaptureProcess, CaptureUpdate }
)(withRouter(CaptureProcessPage));

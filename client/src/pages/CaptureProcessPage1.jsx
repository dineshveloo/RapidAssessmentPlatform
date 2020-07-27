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
import 'react-toastify/dist/ReactToastify.css';
import { captureP1 } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class CaptureProcessPage1 extends Component {
    state = {
        clientName: '',
        industry: '',
        businessUnit: '',
        subBusinessUnit: '',
        processName: '',
        processId: '',
        processDescription: '',
        msg: '',
        status: 0
    }

   

    onSubmit = e => {
        e.preventDefault();
            const newCaptureProcessP1 = {
                clientName: e.target.clientname.value,
                industry: e.target.ind.value,
                businessUnit: e.target.BU.value,
                subBusinessUnit: e.target.SBU.value,
                processName: e.target.processname.value,
                processId: e.target.PID.value,
                processDescription: e.target.PD.value
            };
            this.props.captureP1(newCaptureProcessP1, this.props.history);
            
        
    };

    

    render() {
        let isEnabled = false;
       
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
                                        
                                       <b>Capture Process/</b><MDBIcon icon='eye' className='indigo-text mr-2' /><b>View Process</b>
                                    </h1>
                                    <form onSubmit={this.onSubmit} className="emailForm" >
                                        {/* <div className='grey-text'> */}
                                        <div className='form-row'>
                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="clientname"
                                                label='Client Name'
                                                group
                                                icon='user'
                                                type='text'
                                                success='right'
                                                value={this.state.clientname}
                                                required
                                            />
                                            </div>
                                           
                                       

                                        {/* <div className='grey-text'> */}
                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="ind"
                                                label='Industry'
                                                group
                                                icon='industry'
                                                type='text'
                                                success='right'
                                                value={this.state.ind}
                                                required
                                            />
                                            </div>
                                           
                                        </div>

                                        <div className='form-row'>
                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="BU"
                                                label='Business Unit'
                                                group
                                                icon='users'
                                                type='text'
                                                success='right'
                                                value={this.state.BU}
                                                required
                                            />
                                           
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="SBU"
                                                label='Sub Business Unit'
                                                group
                                                icon='user-friends'
                                                type='text'
                                                success='right'
                                                value={this.state.SBU}
                                                required
                                            />
                                           
                                        </div>
                                        </div>

                                        <div className='form-row'>
                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="processname"
                                                label='Process Name'
                                                group
                                                icon='cogs'
                                                type='text'
                                                success='right'
                                                value={this.state.processname}
                                                required
                                            />
                                           
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <MDBInput
                                                name='text'
                                                id="PID"
                                                label='Process Id'
                                                group
                                                icon="fingerprint"
                                                type='text'
                                                success='right'
                                                value={this.state.PID}
                                                required
                                            />
                                            
                                        </div>
                                        </div>

                                        <div className='form-group'>
                                            <MDBInput
                                                name='text'
                                                id="PD"
                                                label='Process Description'
                                                group
                                                type='textarea'
                                                rows='3'
                                                icon='align-center'
                                                success='right'
                                                value={this.state.PD}
                                                required
                                            />
                                           
                                        </div>
                                        <div className='text-center'>
                                            <MDBBtn outline color='info' type='submit' disabled={isEnabled}>
                                                Start Assessment<MDBIcon icon='paper-plane' className='ml-1' />
                                            </MDBBtn>
                                        </div>
                                        <div className='text-center'>

                                             <b>Have you already captured the process? please click<a href='/viewprocess'> <MDBIcon icon='eye' className='indigo-text'/> </a> to View.</b>

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

CaptureProcessPage1.propTypes = {
    captureP1: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { captureP1 }
)(withRouter(CaptureProcessPage1));

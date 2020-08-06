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
    exceptions: "",
    transactionVolume: "",
    AverageHandlingTime: "",
    TotalHeadcount: "",
    ProductiveFTEs: "",
    ShiftTimings: "",
    unstructuredData: "",
    listofNames: "",
    ProcessCount: "",
    NumberofScreens: "",
    HumanDecisionPoints: "",
    StandardInputTemplate: "",
    metrics: "",
    LevelofDocumentation:"",
    processInvolved:"",
    BusinessProcessChange:"",
    processSLA:"" , 
    NatureofProcess:"", 
    StructureofInputData:"", 
    DocumentsProcessed:"",
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
            //console.log("property_id", this.props.location.state.selectedrow);
            const res = this.props.location.state.selectedrow;
            //console.log(res);
            this.setState({
                processId: res._id,
                clientName: res.clientName,
                businessUnit: res.businessUnit,
                subBusinessUnit: res.subBusinessUnit,
                processName: res.processName,
                processDescription: res.processDescription,
                list: res.list,
                exceptions: res.exceptions,
                transactionVolume:res.transactionVolume,
                AverageHandlingTime: res.AverageHandlingTime,
                TotalHeadcount:res.TotalHeadcount,
                ProductiveFTEs:res.ProductiveFTEs,
                ShiftTimings:res.ShiftTimings,
                unstructuredData:res.unstructuredData,
                listofNames:res.listofNames,
                ProcessCount:res.ProcessCount,
                NumberofScreens:res.NumberofScreens,
                HumanDecisionPoints:res.HumanDecisionPoints,
                StandardInputTemplate:res.StandardInputTemplate,
                metrics:res.metrics,
                LevelofDocumentation:res.LevelofDocumentation,
                processInvolved:res.processInvolved,
                BusinessProcessChange:res.BusinessProcessChange,
                processSLA:res.processSLA, 
                NatureofProcess:res.NatureofProcess, 
                StructureofInputData:res.StructureofInputData, 
                DocumentsProcessed:res.DocumentsProcessed,
                isEditabled: true
            })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log(e);

        if (this.state.processId.length > 0) {
            const newProcess = {
                processId: this.state.processId,
                clientName: this.state.clientName,
                businessUnit: this.state.businessUnit,
                subBusinessUnit: this.state.subBusinessUnit,
                processName: this.state.processName,
                processDescription: this.state.processDescription,
                list: this.state.list,
                exceptions: this.state.exceptions,
                transactionVolume:this.state.transactionVolume,
                AverageHandlingTime: this.state.AverageHandlingTime,
                TotalHeadcount:this.state.TotalHeadcount,
                ProductiveFTEs:this.state.ProductiveFTEs,
                ShiftTimings:this.state.ShiftTimings,
                unstructuredData:this.state.unstructuredData,
                listofNames:this.state.listofNames,
                ProcessCount:this.state.ProcessCount,
                NumberofScreens:this.state.NumberofScreens,
                HumanDecisionPoints:this.state.HumanDecisionPoints,
                StandardInputTemplate:this.state.StandardInputTemplate,
                metrics:this.state.metrics,
                LevelofDocumentation:this.state.LevelofDocumentation,
                processInvolved:this.state.processInvolved,
                BusinessProcessChange:this.state.BusinessProcessChange,
                processSLA:this.state.processSLA, 
                NatureofProcess:this.state.NatureofProcess, 
                StructureofInputData:this.state.StructureofInputData, 
                DocumentsProcessed:this.state.DocumentsProcessed,
            };
            // console.log(newProcess);
            this.props.CaptureUpdate(newProcess, this.props.history);
            this.setState({processId: ''})
        } else {

            const newProcess = {
                clientName: this.state.clientName,
                businessUnit: this.state.businessUnit,
                subBusinessUnit: this.state.subBusinessUnit,
                processName: this.state.processName,
                processDescription: this.state.processDescription,
                list: this.state.list,
                exceptions: this.state.exceptions,
                transactionVolume:this.state.transactionVolume,
                AverageHandlingTime: this.state.AverageHandlingTime,
                TotalHeadcount:this.state.TotalHeadcount,
                ProductiveFTEs:this.state.ProductiveFTEs,
                ShiftTimings:this.state.ShiftTimings,
                unstructuredData:this.state.unstructuredData,
                listofNames:this.state.listofNames,
                ProcessCount:this.state.ProcessCount,
                NumberofScreens:this.state.NumberofScreens,
                HumanDecisionPoints:this.state.HumanDecisionPoints,
                StandardInputTemplate:this.state.StandardInputTemplate,
                metrics:this.state.metrics,
                LevelofDocumentation:this.state.LevelofDocumentation,
                processInvolved:this.state.processInvolved,
                BusinessProcessChange:this.state.BusinessProcessChange,
                processSLA:this.state.processSLA, 
                NatureofProcess:this.state.NatureofProcess, 
                StructureofInputData:this.state.StructureofInputData, 
                DocumentsProcessed:this.state.DocumentsProcessed,
            };
            //console.log(newProcess);
            this.props.CaptureProcess(newProcess, this.props.history);
        }

        //console.log(newProcess);
        this.setState({ clientName: "", businessUnit: "", subBusinessUnit: "", processName: "", processDescription: "", list: "",
                        exceptions: "", transactionVolume: "", AverageHandlingTime: "", TotalHeadcount: "", ProductiveFTEs: "",
                        ShiftTimings: "", unstructuredData: "", listofNames: "", ProcessCount: "", NumberofScreens: "", HumanDecisionPoints: "",
                        StandardInputTemplate: "",  metrics: "",LevelofDocumentation:"",processInvolved:"",
                        BusinessProcessChange:"",processSLA:"" , NatureofProcess:"", StructureofInputData:"", DocumentsProcessed:""
                      });
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
        this.setState({ clientName: "", businessUnit: "", subBusinessUnit: "", processName: "", processDescription: "", list: "", isEditabled: false, processId:'' , exceptions: "", transactionVolume: "", AverageHandlingTime: "", TotalHeadcount: "", ProductiveFTEs: "",
        ShiftTimings: "", unstructuredData: "", listofNames: "", ProcessCount: "", NumberofScreens: "", HumanDecisionPoints: "",
        StandardInputTemplate: "",  metrics: "",LevelofDocumentation:"", processInvolved:"",
        BusinessProcessChange:"",processSLA:"" , NatureofProcess:"", StructureofInputData:"", DocumentsProcessed:"" });
    }
    

    
    
    
    
    
    
    
    render() {
        return (
            <MDBContainer className='mt-5'>
        <h1 className='text-center'>
          <MDBIcon icon={this.state.processId.length > 0 ? 'eye':'edit'} className='indigo-text mr-2' />
          <b>{this.state.processId.length > 0 ? 'View Captured Process Details':'Capture Process'}</b>
        </h1>

                <SectionContainer>
                    <form  onSubmit={this.onSubmit}>
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
                                    disabled={this.state.isEditabled}
                                    required
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
                                    disabled={this.state.isEditabled}
                                    required
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
                                    disabled={this.state.isEditabled}
                                    required
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
                                    disabled={this.state.isEditabled}
                                    required
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
                                    disabled={this.state.isEditabled}
                                    required
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
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Number of Exceptions/Alternate Scenarios/Sub-Processes'
                                    onChange={this.onChange}
                                    value={this.state.exceptions}
                                    id="exceptions"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                        
                            </MDBCol>
                            
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Monthly transaction volume'
                                    onChange={this.onChange}
                                    value={this.state.transactionVolume}
                                    id="transactionVolume"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Average Handling Time (mins, excluding wait times)'
                                    onChange={this.onChange}
                                    value={this.state.AverageHandlingTime}
                                    id="AverageHandlingTime"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Total Headcount'
                                    onChange={this.onChange}
                                    value={this.state.TotalHeadcount}
                                    id="TotalHeadcount"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Productive FTEs'
                                    onChange={this.onChange}
                                    value={this.state.ProductiveFTEs}
                                    id="ProductiveFTEs"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    type='text'
                                    onChange={this.onChange}
                                    value={this.state.ShiftTimings}
                                    label='Shift Timings'
                                    id="ShiftTimings"
                                    rows='2'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.LevelofDocumentation}
                                    id="LevelofDocumentation">
                                <option value="-1">Level of Documentation</option>
                                <option value="No Documentation">No Documentation</option>
                                <option value="Only Process Maps and No Documentation">Only Process Maps and No Documentation</option>
                                <option value="Partial Documentaion and Process Maps">Partial Documentaion and Process Maps</option>
                                <option value="Update SOPs and Process Maps">Update SOPs and Process Maps</option>
                            </select>
                           
                            </MDBCol>
                        

                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.NatureofProcess}
                                    id="NatureofProcess">
                                <option value="-1">Nature of Process</option>
                                <option value="Rule Based - Same steps for all transactions">Rule Based - Same steps for all transactions</option>
                                <option value="Judgement Based - Requires high level of human judgement">Judgement Based - Requires high level of human judgement</option>
                            </select>

                            </MDBCol>
                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTopStructure"
                                    onChange={this.onChange}
                                    value={this.state.StructureofInputData}
                                    id="StructureofInputData">
                                <option value="-1">Structure of Input Data</option>
                                <option value="Structured Data - Tables/Key-Value Pair (Excel/Forms)">Structured Data - Tables/Key-Value Pair (Excel/Forms)</option>
                                <option value="Unstructured Data - Free Text (Emails/Contracts)">Unstructured Data - Free Text (Emails/Contracts)</option>
                                <option value="Mix of Structured and Unstructured">Mix of Structured and Unstructured</option>
                            </select>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='what is the % of unstructured data in the mix?'
                                    onChange={this.onChange}
                                    value={this.state.unstructuredData}
                                    id="unstructuredData"
                                    type="number"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.DocumentsProcessed}
                                    id="DocumentsProcessed">
                                <option>Nature of Documents processed/handled</option>
                                <option value="Digitized Documents - System Readable PDFs">Digitized Documents - System Readable PDFs</option>
                                <option value="Non-Digitized Documents - Scanned PDFs">Non-Digitized Documents - Scanned PDFs</option>
                                <option value="Handwritten Documents">Handwritten Documents</option>
                            </select>

                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    type='text'
                                    onChange={this.onChange}
                                    value={this.state.listofNames}
                                    label='List of Systems/Applications Used (names)'
                                    id="listofNames"
                                    rows='2'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Number of Applications Involved in the Process (count)'
                                    onChange={this.onChange}
                                    value={this.state.ProcessCount}
                                    id="ProcessCount"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.processInvolved}
                                    id="processInvolved">
                                <option>Are there any 3rd Party/external websites involved in the Process?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Number of Screens Involved in the Process'
                                    onChange={this.onChange}
                                    value={this.state.NumberofScreens}
                                    id="NumberofScreens"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Number of Human Decision Points involved in the Process'
                                    onChange={this.onChange}
                                    value={this.state.HumanDecisionPoints}
                                    id="HumanDecisionPoints"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Number of Standard Input Template'
                                    onChange={this.onChange}
                                    value={this.state.StandardInputTemplate}
                                    id="StandardInputTemplate"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>
                            <MDBCol md='6'>  
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.BusinessProcessChange}
                                    id="BusinessProcessChange">
                                <option value="-1">Frequency of Business Process Change</option>
                                <option value="Frequently">Frequently</option>
                                <option value="Infrequently (Stable Process)">Infrequently (Stable Process)</option>
                            </select>

                            </MDBCol>
                            <MDBCol md='6'>
                            <select className="browser-default custom-select dropdownTop"
                                    onChange={this.onChange}
                                    value={this.state.processSLA}
                                    id="processSLA">
                                <option value="-1">Turn Around Time (SLA) of the Process ?</option>
                                <option value="Less than 8 Hrs">Less than 8 Hrs</option>
                                <option value="Less than 24 Hrs">Less than 24 Hrs</option>
                                <option value="Greater than 24 Hrs">Greater than 24 Hrs</option>
                            </select>

                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    label='Any other Metrics that are tracked?'
                                    onChange={this.onChange}
                                    value={this.state.metrics}
                                    id="metrics"
                                    type="text"
                                    group
                                    validate
                                    success='right'
                                    disabled={this.state.isEditabled}
                                    required
                                />
                            </MDBCol>

                        </MDBRow>
                        <div  className='text-center'>
                        <MDBBtn color="indigo" type="submit">{this.state.processId.length > 0 ? 'Update Assessment':'Submit Assessment'}</MDBBtn>
                        { this.props.location.state ? <MDBBtn color="indigo" onClick={this.enableEdit}>Enable Edit </MDBBtn> : null}
                        <MDBBtn color="indigo" onClick={this.refreshHandler}>Reset</MDBBtn>
                        </div>
                        <div id="viewlink" className='text-center'>
                            <b>Please click this<a href='/viewprocess'> <MDBIcon icon='table' className='indigo-text' /> </a>to View the List of Captured Processes.</b>
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

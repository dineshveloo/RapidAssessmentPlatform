import React from 'react';

import { getProcess } from '../actions/authActions';
import {MDBIcon} from 'mdbreact';


class ViewProcessPage extends React.Component {
 constructor(){
   super()
   this.state={
    clientName: '',
    industry: '',
    businessUnit: '',
    subBusinessUnit: '',
    processName: '',
    processId: '',
    processDescription: '',
    errors:{}
   }
 }

  componentDidMount() {
    this.setState({
      clientName: getProcess.clientName,
      industry: getProcess.industry,
      businessUnit: getProcess.businessUnit,
      subBusinessUnit: getProcess.subBusinessUnit,
      processName: getProcess.processName,
      processId: getProcess.processId,
      processDescription: getProcess.processDescription

    })

    
  }

  render() {
    // const { data } = this.state;
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center"><MDBIcon icon='eye' className='indigo-text mr-2'/><b>View Process</b></h2>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Client Name</td>
                <td>{this.state.clientName}</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>{this.state.industry}</td>
              </tr>
              <tr>
                <td>Business Unit</td>
                <td>{this.state.businessUnit}</td>
              </tr>
              <tr>
                <td>Sub Business Unit</td>
                <td>{this.state.subBusinessUnit}</td>
              </tr>
              <tr>
                <td>Process Name</td>
                <td>{this.state.processName}</td>
              </tr>
              <tr>
                <td>Process Id</td>
                <td>{this.state.processId}</td>
              </tr>
              <tr>
                <td>Process Description</td>
                <td>{this.state.processDescription}</td>
              </tr>
            </tbody>
          </table>
          <div className='text-center'>

           <b>Process not found?! please click <a href='/captureprocesspage1'>  <MDBIcon icon='edit' className='indigo-text'/>  </a>to Capture.</b>

        </div>
        </div>
        
      </div>
      
    );
  }
}
export default ViewProcessPage;

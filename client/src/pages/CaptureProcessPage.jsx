import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
// import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class CaptureProcessPage extends Component {
//   state = {
//     value: 'Controlled input with value',
//     iconInput: 'eye-slash',
//     typeInput: 'password'
//   };

//   nextInputRef = null;
//   secondInputRef = null;
//   componentDidMount() {
//     document.querySelectorAll('.iconHover').forEach(el => (el.style.cursor = 'pointer'));

//     this.nextInputRef.focus();
//   }

//   handleSubmit = event => {
//     const { value } = this.state;
//     alert(`MDBInput value: ${value}`);
//     event.preventDefault();
//   };

//   saveToState = value => this.setState({ value });

//   getValue = value => console.log(value);

//   handleChange = event => this.setState({ value: event.target.value });

//   changeFocus = () => this.nextInputRef.focus();

//   mouseEnter = () => {
//     this.setState({
//       iconInput: 'eye',
//       typeInput: 'text'
//     });
//   };

//   mouseLeave = () => {
//     this.setState({
//       iconInput: 'eye-slash',
//       typeInput: 'password'
//     });
//   };

//   handleFocus = () => {
//     return true;
//   };

  render() {
    // const { iconInput, typeInput, value } = this.state;

    return (
      <MDBContainer className='mt-5'>
          <h1 className='h1-responsive mb-4 text-center'>
                    <strong className='font-weight-bold'>
                     
                      Capture Process
                    </strong>
                  </h1>
                  <h6 className='h6-responsive mb-4 text-center'>
                    <strong className='font-weight-bold'>
                     
                      Capture Process related Details
                    </strong>
                  </h6>
          <form>
          <SectionContainer className='text-center'>
        <SectionContainer>
          
            <div className='form-group row'>
              <label htmlFor='' className='col-sm-2 col-form-label'>
             <strong> 1. Client Name </strong>
              </label>
              <div className='col-sm-10'>
                <input type='text' className='form-control'  required/>
              </div>
            </div>
            
         
        </SectionContainer>
        
        <SectionContainer>
          
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor=''><strong>2. Business Unit</strong></label>
                <input type='text' className='form-control'  required/>
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor=''><strong>3. Sub Business Unit</strong></label>
                <input type='text' className='form-control'  required/>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor=''><strong>4. Process Name</strong></label>
                <input type='text' className='form-control'  required/>
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputPassword4'><strong>5. Process ID</strong></label>
                <input type='text' className='form-control'  required/>
              </div>
            </div>
           
         
        </SectionContainer>
        <SectionContainer>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'><strong>6. Process Description</strong></label>
            <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' required/>
          </div>
        </SectionContainer>

        <SectionContainer>
          
            <div className='form-row'>
             
              <div className='col'>
                  <label><strong>7. Monthly Volume</strong></label>
                <input type='number' className='form-control'  required/>
              </div>
              <div className='col'>
              <label><strong>8. AHT(in minutes)</strong></label>
                <input type='number' className='form-control'   required/>
              </div>
              <div className='col'>
              <label><strong>9. FTE</strong></label>
                <input type='number' className='form-control' disabled/>
              </div>
             
            </div>
        
        </SectionContainer>
        <SectionContainer>
          
          <div className='form-row'>
             
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>10. SLA</strong></b></label>
                <select className='form-control' required>
                <option disabled selected value> -- select an option -- </option>
                <option value="Less than 8 hrs">Less than 8 hrs</option>
                     <option value="Less than 12 hrs">Less than 12 hrs</option>
                     <option value="Less than 24 hrs">Less than 24 hrs</option>
                     <option value="Less than 48 hrs">Less than 48 hrs</option>
              </select>
              </div>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>11. TAT</strong></b></label>
                <select className='browser-default custom-select' required>
            
            <option disabled selected value> -- select an option -- </option>
            <option value="Less than 8 hrs">Less than 8 hrs</option>
                 <option value="Less than 12 hrs">Less than 12 hrs</option>
                 <option value="Less than 24 hrs">Less than 24 hrs</option>
                 <option value="Less than 48 hrs">Less than 48 hrs</option>
                
                 </select>
              </div>
            </div> 
        
        </SectionContainer>

        <SectionContainer>
          <label htmlFor=''><strong>12. Applications Used</strong></label>
          <input type='text' id='' className='form-control' required/>
        </SectionContainer>

        <SectionContainer>
         
          <div className='form-row'>
              <div className='form-group col-md-6'  id='' required>
                <label htmlFor=''><b><strong>13. Documentations of the process</strong></b></label>
                <select id='docpro' className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                           <option value="No Documenation">No Documenation</option>
                           <option value="Partial Documentation">Partial Documentation</option>
                           <option value="Detailed Documentation">Detailed Documentation</option>
                          </select>
              </div>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>14. Rule based process</strong></b></label>
                <select id='rulbas' className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                              <option value="High">High</option>
                              <option value="Medium">Medium</option>
                              <option value="Low">Low</option>
                             </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>15. Structure of Input Data</strong></b></label>
                <select className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                      <option value="Structured">Structured</option>
                      <option value="Unstructured">Unstructured</option>
                      <option value="Mix of both">Mix of both</option>
                     </select>
              </div>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>16. Input data type</strong></b></label>
                <select className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                          <option value="Digitized">Digitized</option>
                          <option value="Non Digitized">Non Digitized</option>
                          <option value="Mix of Both">Mix of both</option>
                         </select>
              </div>
            </div>
         
              
        </SectionContainer>
        <SectionContainer>
            
            <div className='form-row'>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>17. Percentage of process amenable for RPA</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
              <div className='form-group col-md-6'  id=''>
                <label htmlFor=''><b><strong>18. Percentage of process amenable for cognitive</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
            </div>
            
        </SectionContainer>

        
        <SectionContainer>
          
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>19. Automation Readiness</strong></b></label>
                <input type='number' className='form-control' id=''   disabled/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>20. Percentage of Automation Potential</strong></b></label>
                <input type='number' className='form-control' id=''  disabled />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>21. FTE Benifit</strong></b></label>
                <input type='text' className='form-control' id=''   disabled/>
              </div>
             
            </div>
         
        </SectionContainer>

        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>22. Number of applications involved in the process</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>23. Number of mainframes applications involved in the process</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>24. Number of applications to be accessed through Citrix</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
             
            </div>
          
        </SectionContainer>

        <SectionContainer>
        <label htmlFor=''><b><strong>25. Are there any 3rd Party Sites involved  in the process</strong></b></label>
                <select className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                <option value="Yes">Yes</option>
                     <option value="No">No</option>
                     
          </select>    
        </SectionContainer>

        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>26. Number of Screens involved in the process</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>27. Number of  process steps</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>28. Number of Exceptions/alternate scenarios</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
             
            </div>
         
        </SectionContainer>

        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>29. Number of Decision points involved in the process</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>30. Number of Standard Input Templates</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
             
             
            </div>
         
        </SectionContainer>

        <SectionContainer>
        <label htmlFor=''><b><strong>31. Interaction with Dynamic Table</strong></b></label>
                <select className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                <option value="Yes">Yes</option>
                     <option value="No">No</option>
                     
          </select>    
        </SectionContainer>

        
        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>32. Number of Dynamic\Ajax based controls</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>33. Number of Access Profiles to cover</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>34. Number of Browsers Support</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
             
            </div>
         
        </SectionContainer>

        <SectionContainer>
        <label htmlFor=''><b><strong>35. Operational stability of the applications and how often is it changed?</strong></b></label>
                <select id='oprsta' className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                              <option value="Planned Downtime">Planned Downtime</option>
                              <option value="Once in a month">Once in a month</option>
                             </select> 
                             <label htmlFor=''><b><strong>36. Frequency of business process Change</strong></b></label>
                <select id='freqbus' className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                      <option value="Frequently">Frequently</option>
                      <option value="Infrequently">Infrequently</option>

                     </select> 
                     <label htmlFor=''><b><strong>37. Service Level Agreement of the process?</strong></b></label>
                <select className='browser-default custom-select' required>
                <option disabled selected value> -- select an option -- </option>
                          <option value="Less than 8 hrs">Less than 8 hrs</option>
                          <option value="Less than or equal to 24 hrs">Less than or equal to 24 hrs</option>
                          <option value="More than 24 hrs">More than 24 hrs</option>
                         </select>  
        </SectionContainer>


        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>38. Number of Business Users to Get Sign-off</strong></b></label>
                <input type='number' className='form-control' id=''  required />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>39. Number of Business Teams Required for Environment Set-up</strong></b></label>
                <input type='number' className='form-control' id=''   required/>
              </div>
             
             
            </div>
          
        </SectionContainer>

        <SectionContainer>
         
            <div className='form-row'>
             
              <div className='col'>
              <label htmlFor=''><b><strong>40. Funtional Point(X-Axis)</strong></b></label>
                <input type='number' className='form-control' id=''  disabled />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>41. Monthly effort Savings(Y-AXIS)</strong></b></label>
                <input type='number' className='form-control' id=''  disabled/>
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>42. Effort (#pm)</strong></b></label>
                <input type='number' className='form-control' id=''  disabled />
              </div>
              <div className='col'>
              <label htmlFor=''><b><strong>43. Quadrant</strong></b></label>
                <input type='text' className='form-control' id=''   disabled/>
              </div>
             
             
            </div>
         
        </SectionContainer>
        <button type='submit' className='btn btn-primary btn-md'>
              Submit
            </button>
        </SectionContainer>

       

            

        


       
        </form>


      </MDBContainer>
    );
  }
}

export default CaptureProcessPage;

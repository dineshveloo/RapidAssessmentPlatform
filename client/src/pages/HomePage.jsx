import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './HomePage.css';
import { loginUser } from '../actions/authActions';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RPD from '../assets/rapid process discovery.jpg';
import PFD from '../assets/processflowdocumentation.jpg';
import BCRM from '../assets/BCRM.jpg';
import RPAs from '../assets/rapid_process_assessment.jpg';
import PD from '../assets/process_documentation.jpg';
import OI from '../assets/OPPID.jpg';
import VT from '../assets/VAT.jpg';
          

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {

    return (
      <>
      <div id="home">
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        </div>
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>

                      Rapid Assessment Platform
                    </strong>
                  </h2>
                  <MDBRow />
                  <MDBRow id='categories'>
                    <MDBCol md='4'>
                      <MDBAnimation reveal type='fadeInLeft'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <a  href={this.props.auth.isAuthenticated ? '/rapidprocessdiscovery': '/signin'}><MDBCardImage
                            cascade
                           
                            className='img-fluid'
                            src={RPD}

                          /></a>
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>Rapid Process Discovery</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to={this.props.auth.isAuthenticated ? '/rapidprocessdiscovery': '/signin'}
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                              select
                          </MDBNavLink>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                    <MDBCol md='4'>
                      <MDBAnimation reveal type='fadeInTop'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <a href={this.props.auth.isAuthenticated ? '/': '/signin'}><MDBCardImage
                            cascade
                            className='img-fluid'
                            
                            src={PFD}
                          /></a>
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>Process Flow Documentation</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to={this.props.auth.isAuthenticated ? '/': '/signin'}
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                               select
                          </MDBNavLink>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                    <MDBCol md='4'>
                      <MDBAnimation reveal type='fadeInRight'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                        <a href={this.props.auth.isAuthenticated ? '/': '/signin'}><MDBCardImage
                            cascade
                            className='img-fluid'
                            src={BCRM}
                          /></a>
                          <MDBCardBody className='text-center'>
                            <MDBCardTitle>
                              <strong>Business Case & Road Map</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to={this.props.auth.isAuthenticated ? '/': '/signin'}
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                               select
                          </MDBNavLink>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>

          <div id="about">
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  About Rapid Assesment Platform
                </h2>
                <p className='text-center text-muted mb-1'>
                  "Rapid Assessment Platform” <span class="font-weight-bold text-info">RAP</span> is a web-based toolkit that can be leveraged for remote Automation Assessments.
                </p>
                <p className='text-center text-muted mb-1'>
                  <span class="font-weight-bold text-info">RAP</span> provides recommendations for automation opportunities and solutions based on response to the assessment questionnaire.
                </p>
                <p className='text-center text-muted'>
                  Adoption of the <span class="font-weight-bold text-info">RAP</span> can help in accelerating the overall automation delivery leading to <strong>“Faster Time to Value”</strong>.
                </p>
                <hr className='my-5' />

                <MDBRow id='categories'>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src={RPAs}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Rapid Process Assessment</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                           <p class="tilemidpad">Process assessment questionnaire can be captured online during discovery workshops</p>
                           <p class="tilepad">This can be performed remotely as well.</p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInTop'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src={PD}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Process Documentation</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p>Processes flows can be documented along with process related metrics viz. Automation Potential, Cycle Time etc.</p>
                          <p>We also leverage Optimize.ai,Mphasis's cognitive solution for process mining.</p>
                       
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src={OI}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Opportunity Identification</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p class="tilemidpad"><span class="font-weight-bold text-info">RAP</span> uses proven recommendation engine that is refined over multiple clinet enagements.</p>
                            <p class="tilepad">Used for identifying automation opportunities & maximizing ROI.</p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src={VT}
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Value Tracking Feature</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p class="tilemidpad">Interactive dashboards for tracking automation opportunities, prioritization and benefits realization.</p>
                            <p class="tilepad">Prebuilt reports that can be exported in PDF format</p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          </div>
          <div id="contact">

          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Contact Us
                </h2>
                <p className='text-center text-muted mb-1'>Any questions? Please contact us directly.</p>
                <hr className='my-5' />
                <MDBRow id='categories'>
                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Renjeev Kolanchery</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p className='text-center text-muted mb-1'> Co-Head,Enterprise Automation Tribe</p>
                            <p className='text-center text-muted mb-1'>SVP,Head Automation COE,Mphasis</p>
                            <p className='text-center text-muted mb-1'> renjeev.kolanchery@mphasis.com</p>
                            <p className='text-center text-muted mb-1'> +44 7424 635 245</p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Vivek Jasuja</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p className='text-center text-muted mb-1'> Co-Head,Enterprise Automation Tribe</p>
                            <p className='text-center text-muted mb-1'>SVP,Industry Solutions Group,Mphasis</p>
                            <p className='text-center text-muted mb-1'>vivek.jasuja@mphasis.com</p>
                            <p className='text-center text-muted mb-1'> +1 646 670 7190</p>

                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          </div>

        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
HomePage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { loginUser }
)(HomePage);
//export default HomePage;

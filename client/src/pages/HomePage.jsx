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
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'

                          />
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>Rapid Process Discovery</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to='/captureprocesspage1'
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                              get started
                          </MDBNavLink>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                    <MDBCol md='4'>
                      <MDBAnimation reveal type='fadeInTop'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                          />
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>Process Flow Documentation</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to='/'
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                               get started
                          </MDBNavLink>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                    <MDBCol md='4'>
                      <MDBAnimation reveal type='fadeInRight'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                          />
                          <MDBCardBody className='text-center'>
                            <MDBCardTitle>
                              <strong>Business Case & Road Map</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to='/'
                              color='mdb-color'
                              className='btn btn-outline-mdb-color-new btn-sm btn-rounded d-inline'
                              onClick={this.scrollToTop}
                            >
                               get started
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
                  "Rapid Assessment Platform” is a web-based toolkit that can be leveraged for remote Automation Assessments.
                </p>
                <p className='text-center text-muted mb-1'>
                  The tool generates recommendations based on response to the assessment questionnaire.
                </p>
                <p className='text-center text-muted'>
                  Adoption of the Rapid Assessment Platform can help in accelerating the overall automation delivery leading to “Faster Time to Value”.
                </p>
                <hr className='my-5' />

                <MDBRow id='categories'>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Rapid Process Assessment</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                           <p>Process assessment questionnaire can be captured online during discovery workshops</p>
                           <p>This can be performed remotely as well.</p>
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
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Process Documentation</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p>Processes flows can be documented along with process related metrics viz. Automation Potential, Cycle Time etc.</p>
                          <p> We also leverage Optimize.ai,the cognitive tool for process mining.</p>
                       
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
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Opportunity Identification</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p>We can call this as Recommendation engine that identify opportunities and helps to yield progress.</p><p>Used for identifying automation opportunities & maximizing ROI.</p>
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
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>Value Tracking Feature</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <p> Dashboards for tracking benefits realization during implementation which helps to yield progress in the implementation.</p>
                            <p>Mainly used for the realization of benifits.</p>
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
                <p className='text-center text-muted mb-1'>Do you have any questions? Please do not hesitate to contact us directly.</p>
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

export default HomePage;

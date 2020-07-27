import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './HomePage.css';

class ProcessDiscoveryPage extends React.Component {
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

                    Rapid Process Discovery
                    </strong>
                  </h2>
                  <MDBRow />
                  <MDBRow id='categories'>
                    <MDBCol md='6'>
                      <MDBAnimation reveal type='fadeInLeft'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'

                          />
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>Capture Process</strong>
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
                    <MDBCol md='6'>
                      <MDBAnimation reveal type='fadeInRight'>
                        <MDBCard cascade className='my-3 grey lighten-4'>
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                          />
                          <MDBCardBody  >
                            <MDBCardTitle>
                              <strong>View Process</strong>
                            </MDBCardTitle>
                            <MDBNavLink
                              tag='button'
                              to='/viewprocess'
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

         
        </div>
      </>
    );
  }
}

export default ProcessDiscoveryPage;

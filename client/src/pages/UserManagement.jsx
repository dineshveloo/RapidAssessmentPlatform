import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBDataTable
} from 'mdbreact';
import './HomePage.css';
import SectionContainer from '../components/sectionContainer';

class UserManagementPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <div id="UM" className='mt-3 mb-5'>
        <MDBContainer className='mt-3'>
       
       
        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer
              header='User Management'
              noBorder
            >
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    scrollX
                    scrollY
                    maxHeight='300xp'
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

       
      </MDBContainer>
       
        </div>
      </>
    );
  }
}

export default UserManagementPage;
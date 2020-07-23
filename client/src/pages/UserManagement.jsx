import React from 'react';
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBadge
} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

class UserManagement extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Rotarepmi/exjson/db')
      .then(res => res.json())
      .then(json => {
        let data = json;
        let { columns, rows } = json;

        columns.push({
          label: 'Own Data',
          field: 'id',
          sort: 'asc',
          width: 150
        });

        rows = rows.map((row, key) => ({
          ...row,
          id: (
            <MDBBadge
              color='info'
              className='w-100'
              searchvalue={key}
              key={key}
            >
              {key}
            </MDBBadge>
          )
        }));

        data = {
          columns,
          rows
        };
        this.setState({ data });
      });
  }

  render() {
    
    return (
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
                    maxHeight='50vh'
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        
      </MDBContainer>
    );
  }
}
export default UserManagement;

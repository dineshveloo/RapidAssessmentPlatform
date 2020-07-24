import React from 'react';
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBadge
} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

class ViewProcessPage extends React.Component {
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
    // const { data } = this.state;
    return (
      <MDBContainer className='mt-3'>
        
        
        <h1 className='text-center'>
            <MDBIcon icon='eye' className='indigo-text mr-2' /><b>View Process</b>
        </h1>
        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer
              
              header=''
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
export default ViewProcessPage;

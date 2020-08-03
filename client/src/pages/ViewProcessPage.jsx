import React from 'react';

import { MDBDataTable, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { Redirect } from "react-router-dom";
//import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './HomePage.css';

const url = 'http://localhost:5000/api/users/viewprocessdata';

class ViewProcessPage extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      posts: [],
      selectedrow: [],
      isLoading: true,
      redirect: false,
      tableRows: [],

    };

  }

  componentDidMount = async () => {
    await axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ posts: data })
      })
      .then(async () => {
        this.setState({ tableRows: this.assemblePosts(), isLoading: false })
        // console.log(this.state.tableRows);
      });
  }

  handleClick = (post) => {
    this.setState({ selectedrow: post, redirect: true }, () => console.log(this.state.selectedrow));
  }

 redirect=()=>{
  if (this.state.redirect) {
  return <Redirect
  to={{
    pathname: "/captureprocesspage",
    state: { selectedrow: this.state.selectedrow}
  }}
/>
  }
 }

  assemblePosts = () => {
    let posts = this.state.posts.map((post) => {
      return (
        {
          clientName: post.clientName,
          businessUnit: post.businessUnit,
          subBusinessUnit: post.subBusinessUnit,
          processName: post.processName,
          //clickEvent: () => this.handleClick(post),
          action: <MDBBtn color="default" rounded size="sm" onClick={() => { this.handleClick(post) }}>View</MDBBtn>
        }
      )
    });
    return posts;
  }

  
  render() {
    const data = {
      columns: [
        {
          label: 'Client Name',
          field: 'clientName',
        },

        {
          label: 'Business Unit',
          field: 'businessUnit',
        },
        {
          label: 'Sub Business Unit',
          field: 'subBusinessUnit',
        },
        {
          label: 'Process Name',
          field: 'processName',
        },
        
        {
          label: 'Action',
          field: 'action',
        },
      ],
      rows: this.state.tableRows,
    }


    return (  
      < MDBContainer id="UM" className='mt-3' >
        {this.redirect()}
        <h1 className='text-center'>
          <MDBIcon icon='eye' className='indigo-text mr-2' />
          <b>View Captured Process</b>
        </h1>

        <MDBRow id="VP" className="mb-4">
          <MDBCol md="12">
            <MDBCard >
              <MDBCardBody>
                <div class="table-responsive-md">
                <MDBDataTable
                  striped
                  bordered
                  hover
                  data={data} />
                </div>
              </MDBCardBody>
            </MDBCard>
            <div id="viewlink" className='text-center'>
              <b>Process not found?! Please click<a href='/captureprocesspage'> <MDBIcon icon='edit' className='indigo-text' /> </a>to Capture.</b>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}
export default ViewProcessPage;

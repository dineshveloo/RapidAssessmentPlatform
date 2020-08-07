import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBBtn, MDBDataTableV5 } from 'mdbreact';
import { Redirect } from "react-router-dom";
//import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './HomePage.css';
import SectionContainer from '../components/sectionContainer';

const url = 'http://18.191.23.96:5000/api/users/viewprocessdata';

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
          action: <MDBBtn color="default" rounded size="sm" onClick={() => { this.handleClick(post) }}><i class="far fa-eye"></i> View</MDBBtn>
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
          <MDBIcon icon='table' className='indigo-text mr-2' />
          <b>List of Captured Processes</b>
        </h1>


        <MDBRow id="VP" className="py-3">
          <MDBCol md="12">
           <SectionContainer  noBorder>
            <MDBCard >
              <MDBCardBody>
<!--                 <div class="table-responsive-md"> -->
                <MDBDataTableV5
                  scrollY 
                  maxHeight='50vh'
                  hover
                  data={data} />
<!--                   </div> -->
              </MDBCardBody>
            </MDBCard>
           </SectionContainer>
            <div id="viewlink" className='text-center'>
              <b>Process not found? Please click this<a href='/captureprocesspage'> <MDBIcon icon='edit' className='indigo-text' /> </a>to Capture a Process.</b>
            </div>
              
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}
export default ViewProcessPage;

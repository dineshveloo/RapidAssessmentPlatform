import React from 'react';

import { MDBDataTable, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer} from 'mdbreact';

import axios from 'axios';
import './HomePage.css';


const url = 'http://18.191.23.96:5000/api/users/viewprocessdata';


class ViewProcessPage extends React.Component {
  constructor(props) {

    super(props);

    this.state= {

      posts: [],

      isLoading:true,

      tableRows: [],

    };

  }




  componentDidMount=async() => {

    await axios.get(url)

      .then(response => response.data)

      .then(data => {

         this.setState({ posts: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         console.log(this.state.tableRows);

      });

  }




  assemblePosts= () => {

    let posts =this.state.posts.map((post) => {

      return (

        {
          clientName: post.clientName,
          industry: post.industry,
          businessUnit: post.businessUnit,
          subBusinessUnit: post.subBusinessUnit,
          processName: post.processName,
          processId: post.processId,
         

        }

      )

    });

    return posts;

  }





  render() {

    const data = {

      columns: [
         {

          label:'Client Name',

          field:'clientName',

        },

        {

          label:'Industry',

          field:'industry',

        },

        {

          label:'Business Unit',

          field:'businessUnit',

        },
        {

          label:'Sub Business Unit',

          field:'subBusinessUnit',

        },
        {

          label:'Process Name',

          field:'processName',

        },
        {

          label:'Process Id',

          field:'processId',

        },
       

      ],

      rows:this.state.tableRows,

    }




    return (

    <MDBContainer id="UM" className='mt-3'>
        <h1 className='text-center'>
           <MDBIcon icon='eye' className='indigo-text mr-2' />
           <b>View Captured Process</b>
        </h1>
     
        <MDBRow id="VP" className="mb-4">
        
           <MDBCol  md="12">
       
              <MDBCard >

                  <MDBCardBody>

                        <MDBDataTable 
                               striped
                               bordered
                               hover
                               data={data}/>

                  </MDBCardBody>

              </MDBCard>
              <div id="viewlink" className='text-center'>

             <b>Process not found?! Please click<a href='/captureprocesspage1'> <MDBIcon icon='edit' className='indigo-text'/> </a>to Capture.</b>

           </div>

           </MDBCol>
           

        </MDBRow>
        
     
    </MDBContainer>

    );

  }

}
export default ViewProcessPage;

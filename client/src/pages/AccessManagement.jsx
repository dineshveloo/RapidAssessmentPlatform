import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBCard, MDBIcon, MDBCardBody, MDBDataTableV5,
} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';
//import Result from '../components/result';
import SelectRoles from '../components/SelectRoles';
import { RolesAssigned } from '../actions/authActions';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import './HomePage.css';

class AccessManagementPage extends Component {
  state = {
    checkbox1: '',
    checkbox2: '',
    multiple: '',
    selectedEmail: '',
    selectedRole: '',
    data: {
      columns: [],
      rows: []
    },
    roles: []
  }

  componentDidMount() {
    fetch('http://18.191.23.96:5000/api/users/userlist')
      .then(res => res.json())
      .then(json => {

        const row = json.rows.map(Key => {
          delete Key.__v; delete Key._id; delete Key.password;
          return Key;
        });

        let col = [];
        col.push(
          {
            label: 'Name',
            field: 'name',
            width: 150,
            sort: ''
          },

          {
            label: 'Email',
            field: 'email',
            width: 250,
            sort: 'asc',
          },
          {
            label: 'Company',
            field: 'company',
            width: 150,
            sort: ''
          },
          {
            label: 'Access Level',
            field: 'accesslevel',
            width: 150,
            sort: ''
          },

        );

        let data = {
          columns: col,
          rows: row
        }
        //console.log("columns" + JSON.stringify(row));
        this.setState({ data });

      });

    fetch('http://18.191.23.96:5000/api/users/getallroles')

      .then(res => res.json())
      .then(json => {
        //console.log(json.role);
        this.setState({ roles: json.role });
        console.log(this.state.roles);
      }
      )
  }

  showLogs1 = e => {

    this.setState({ checkbox1: e, selectedEmail: e.email }, () => console.log(this.state.checkbox1.checked));

  };

  showLogs2 = e => {
    this.setState({ checkbox2: e });
  };

  // multiPle = e => {
  //   //console.log(this.state.selectedEmail);
  //   // 
  //   // const selectedEmailclone = {
  //   //   ...this.state.selectedEmail
  //   // }
  //   this.setState({ multiple: e, selectedEmail: e[0].email });
  //   console.log(this.state.selectedEmail);
  //       console.log(e.email);

  // };

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({ selectValue: e.target.value, selectedRole: e.target.value });
  };

  assignHandler = (e) => {
    e.preventDefault();
    const assignRole = {
      emailid: this.state.selectedEmail,
      roleid: this.state.selectedRole
    };
    //console.log(assignRole);
    this.props.RolesAssigned(assignRole);
  }

  render() {
    const { data } = this.state;
    return (
      <MDBContainer id="UM" className='mt-3'>
         <h1 className='text-center'>
          <MDBIcon icon='key' className='indigo-text mr-2' />
          <b>Access Management</b>
        </h1>
        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer  noBorder>
              <SelectRoles
                roles={this.state.roles}
                changeValue={this.handleChange}
                assignRole={this.assignHandler}
                disabled={this.state.checkbox1.checked}
                isRoleSelected = {this.state.selectedRole.length > 0 ? this.state.selectedRole :''}
              />
              <MDBCard>
                <MDBCardBody>
                  {this.state.data['rows'].length > 0 ?
                    <MDBDataTableV5
                      hover
                      scrollX
                      scrollY
                      maxHeight='50vh'
                      entriesOptions={[5, 20, 25]}
                      entries={5}
                      pagesAmount={4}
                      data={data}
                      checkbox="true"
                      headCheckboxID='id2'
                      bodyCheckboxID='checkboxes2'
                      getValueCheckBox={e => {
                        this.showLogs1(e);
                      }}
                      checkboxFirstColumn
                    />
                    : null}
                </MDBCardBody>
              </MDBCard>
              {/* <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result> */}
            </SectionContainer>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    );
  }
}

AccessManagementPage.propTypes = {
  RolesAssigned: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { RolesAssigned }
)(withRouter(AccessManagementPage));


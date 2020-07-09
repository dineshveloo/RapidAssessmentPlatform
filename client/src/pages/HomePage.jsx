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
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
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
                            to='/'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInDown'>
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
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
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
                        <MDBCardBody  className='text-center'>
                          <MDBCardTitle>
                            {/* <MDBIcon icon='code' className='green-text pr-2' /> */}
                            <strong>Business Case & Road Map</strong>
                          </MDBCardTitle>
                          {/* <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText> */}

                          <MDBNavLink
                            tag='button'
                            to='/'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
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
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                 About Rapid Assesment Platform
                </h2>
                <p className='text-center text-muted mb-1'>
                Rapid Assessment Platform” is a web-based toolkit that can be leveraged for remote Automation Assessments.
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
                            {/* <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            /> */}
                            <strong>Rapid Process Assessment</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                         <p> Process assessment questionnaire can be captured online during discovery workshops</p>
                         <p>This can be performed remotely as well.</p>
                          </MDBCardText>
                          {/* <MDBNavLink
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            {/* <MDBIcon icon='cubes' className='blue-text pr-2' /> */}
                            <strong>Process Documentation</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p>Processes flows can be documented along with process related metrics viz. Automation Potential, Cycle Time etc.</p>
                    <p>We also leverage Optimize.ai,the cognitive tool for process mining.</p>
                 
                          </MDBCardText>
                          {/* <MDBNavLink
                            tag='button'
                            to='/components'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
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
                            {/* <MDBIcon icon='code' className='green-text pr-2' /> */}
                            <strong>Opportunity Identification</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p>We can call this as Recommendation engine that identify opportunities and helps to yield progress.</p><p>Used for identifying automation opportunities & maximizing ROI.</p>
                          </MDBCardText>

                          {/* <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
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
                            {/* <MDBIcon icon='code' className='green-text pr-2' /> */}
                            <strong>Value Tracking Feature</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            
                         <p> Dashboards for tracking benefits realization during implementation which helps to yield progress in the implementation.</p>
                         <p>Mainly used for the realization of benifits.</p>
                          </MDBCardText>

                          {/* <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  
                </MDBRow>

                {/* <MDBRow id='categories'> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/navigation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/forms'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/tables'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                {/* </MDBRow> */}
{/* 
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/ModalExamplesPage'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInUp'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/addons'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  
                </MDBRow> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                 Contact Us
                </h2>
                <p className='text-center text-muted mb-1'>Do you have any questions? Please do not hesitate to contact us directly.</p>
                {/* <p className='text-center text-muted mb-1'>
                Rapid Assessment Platform” is a web-based toolkit that can be leveraged for remote Automation Assessments.
                </p>
                <p className='text-center text-muted mb-1'>
                The tool generates recommendations based on response to the assessment questionnaire.
                </p>
                <p className='text-center text-muted'>
                Adoption of the Rapid Assessment Platform can help in accelerating the overall automation delivery leading to “Faster Time to Value”.
                </p> */}
                <hr className='my-5' />

                <MDBRow id='categories'>
                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        {/* <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        /> */}
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            {/* <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            /> */}
                            <strong>Renjeev Kolanchery</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p className='text-center text-muted mb-1'> Co-Head,Enterprise Automation Tribe</p>
                          <p className='text-center text-muted mb-1'>SVP,Head Automation COE,Mphasis</p>
                          <p className='text-center text-muted mb-1'> renjeev.kolanchery@mphasis.com</p>
                          <p className='text-center text-muted mb-1'> +44 7424 635 245</p>
                          </MDBCardText>
                          {/* <MDBNavLink
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        {/* <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        /> */}
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            {/* <MDBIcon icon='cubes' className='blue-text pr-2' /> */}
                            <strong>Vivek Jasuja</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          <p className='text-center text-muted mb-1'> Co-Head,Enterprise Automation Tribe</p>
                          <p className='text-center text-muted mb-1'>SVP,Industry Solutions Group,Mphasis</p>
                          <p className='text-center text-muted mb-1'>vivek.jasuja@mphasis.com</p>
                          <p className='text-center text-muted mb-1'> +1 646 670 7190</p>
                 
                          </MDBCardText>
                          {/* <MDBNavLink
                            tag='button'
                            to='/components'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  {/* <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle> */}
                            {/* <MDBIcon icon='code' className='green-text pr-2' /> */}
                            {/* <strong>Opportunity Identification</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Recommendation engine for identifying automation opportunities & maximizing ROI.
                          </MDBCardText> */}

                          {/* <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        {/* </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  {/* <MDBCol md='3'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle> */}
                            {/* <MDBIcon icon='code' className='green-text pr-2' /> */}
                            {/* <strong>Value Tracking Feature</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Dashboards for tracking benefits realization during implementation.
                          </MDBCardText> */}

                          {/* <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink> */}
                        {/* </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  
                </MDBRow>

                {/* <MDBRow id='categories'> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/navigation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/forms'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                  {/* <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/tables'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol> */}
                {/* </MDBRow> */}
{/* 
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/ModalExamplesPage'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInUp'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/addons'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  
                </MDBRow> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

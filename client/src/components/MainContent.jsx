import React from 'react';
import {
  Col, Navbar, Nav, Card,
} from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import CourseCreate from './CourseCreate.jsx';

/* eslint-disable-next-line react/prefer-stateless-function */
class MainContent extends React.Component {
  render() {
    const { onClickSidebar } = this.props;
    return (
      <>
        <Col className="mainDashboard" md="9">
          <div className="top">
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">
                <div
                  sm="2"
                  className="sidebarCollapse"
                  style={{
                  }}
                >
                  <IconButton onClick={onClickSidebar}>
                    <HorizontalSplitIcon style={{ color: '#efefef' }} />
                  </IconButton>
                </div>
              </Navbar.Brand>
              <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
              </Nav>
              <CourseCreate />
            </Navbar>
          </div>
          <Card
            style={{
              margin: 'auto',
              width: '80%',
              marginTop: '-15%',
            }}
          >
            <Card.Body>
              <h3>This is where Courses are listed with actions</h3>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default MainContent;

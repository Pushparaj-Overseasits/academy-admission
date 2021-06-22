import React from 'react';
import {
  Col, Navbar, Nav, Card, Table, Button, Row, Form, Modal,
} from 'react-bootstrap';
import { IconButton, Tooltip } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

/* eslint-disable-next-line react/prefer-stateless-function */
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, action: '' };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(value) {
    this.setState({ show: true, action: value });
  }

  render() {
    const { onClickSidebar } = this.props;
    const { show, action } = this.state;
    return (
      <>
        <Col className="mainDashboard" md="9">
          <div className="top">
            <Navbar style={{ backgroundColor: 'rgba(2,132,199,1)' }} variant="dark">
              <Navbar.Brand href="#home">
                <div
                  sm="2"
                  className="sidebarCollapse"
                  style={{
                  }}
                >
                  <IconButton onClick={onClickSidebar}>
                    <ListIcon style={{ color: '#efefef' }} />
                  </IconButton>
                </div>
              </Navbar.Brand>
              <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
              </Nav>
            </Navbar>
            <Button
              variant="light"
              onClick={() => this.handleShow('create')}
              style={{
                marginTop: '15px',
                marginLeft: '10%',
                boxShadow: '0px 0px 10px 0px gray',
              }}
            >
              Add Course
            </Button>
          </div>
          <Card
            style={{
              margin: 'auto',
              width: '80%',
              marginTop: '-25%',
              boxShadow: '0px 0px 15px 0px gray',
            }}
          >
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>College ID</th>
                    <th>Course Name</th>
                    <th>Course Status</th>
                    <th>Course Type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Course ID</td>
                    <td>College ID</td>
                    <td>Course Name</td>
                    <td>Course Status</td>
                    <td>Course Type</td>
                    <td>
                      <Tooltip title="Edit" placement="right">
                        <IconButton onClick={this.handleShow}>
                          <EditIcon style={{ color: 'green' }} />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title="Delete" placement="right">
                        <IconButton>
                          <DeleteIcon style={{ color: 'red' }} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Course ID</td>
                    <td>College ID</td>
                    <td>Course Name</td>
                    <td>Course Status</td>
                    <td>Course Type</td>
                    <td>
                      <Tooltip title="Edit" placement="right">
                        <IconButton onClick={this.handleShow}>
                          <EditIcon style={{ color: 'green' }} />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title="Delete" placement="right">
                        <IconButton>
                          <DeleteIcon style={{ color: 'red' }} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {(action === 'create') ? 'Create' : 'Edit'}
              {' '}
              Course
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextCollegeId">
                <Form.Label column sm="4">
                  College ID
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter College ID" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextName">
                <Form.Label column sm="4">
                  Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Course Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextStatus">
                <Form.Label column sm="4">
                  Course Status
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Course Status" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextType">
                <Form.Label column sm="4">
                  Course Type
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Course Type" />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              {(action === 'create') ? 'Create' : 'Save'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MainContent;

import React from 'react';
import {
  Button, Row, Col, Form, Modal,
} from 'react-bootstrap';

class CourseCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
    return (
      <>
        <Button variant="secondary" onClick={this.handleShow}>Add Course</Button>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextCollegeId">
                <Form.Label column sm="3">
                  College ID
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter College ID" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextName">
                <Form.Label column sm="3">
                  Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Course Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextStatus">
                <Form.Label column sm="3">
                  Course Status
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Course Status" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextType">
                <Form.Label column sm="3">
                  Course Type
                </Form.Label>
                <Col sm="9">
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
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CourseCreate;

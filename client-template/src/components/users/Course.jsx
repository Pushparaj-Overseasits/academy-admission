import React from 'react';
import {
  Card, Form, Row, Col,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'block', sessions: [], courses: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { display } = this.state;
    this.setState({
      display: (display === 'block') ? 'none' : 'block',
    });
  }

  componentDidMount() {
    this.loadSession();
    this.loadCourse();
  }

  async loadSession() {
    try {
      const response = await fetch('http://localhost:8000/admin/session/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      this.setState({ sessions: result });
    } catch (err) {
      console.log(err);
    }
  }

  async loadCourse() {
    try {
      const response = await fetch('http://localhost:8000/admin/course/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      this.setState({ courses: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { display } = this.state;
    let element;
    if (display === 'none') {
      element = <AddIcon />;
    } else {
      element = <RemoveIcon />;
    }
    const sessions = this.state.sessions.map((session) => (
      <option key={session.id} value={session.id}>{session.name}</option>
    ));
    const courses = this.state.courses.map((course) => (
      <option key={course.id} value={course.id}>{course.name}</option>
    ));
    return (
      <>
        <div>
          <Card
            style={{
              width: '80%',
              margin: 'auto',
              marginTop: '20px',
              boxShadow: '0px 0px 15px 0px gray',
            }}
          >
            <Card.Header
              style={{
                backgroundColor: '#d4edda',
              }}
            >
              <IconButton onClick={this.handleClick}>
                {element}
              </IconButton>
              Course
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Apply For Session: <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      name="sessionId"
                      value={this.props.sesionId}
                      as="select"
                      onChange={this.props.handleInputChange}
                    >
                      <option value=''>--- Select Session ---</option>
                      {sessions}
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Apply For Course: <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      name="courseId"
                      value={this.props.courseId}
                      as="select"
                      onChange={this.props.handleInputChange}
                    >
                      <option value=''>--- Select Course ---</option>
                      {courses}
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEnrollmentNo">
                  <Form.Label column sm="3">
                    Enrollement Number: <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      name="enrollmentNo"
                      type="text"
                      placeholder="Enter your enrollment number"
                      value={this.props.enrollmentNo}
                      onChange={this.props.handleInputChange}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Course;

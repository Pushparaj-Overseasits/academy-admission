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
    this.state = { display: 'block' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { display } = this.state;
    this.setState({
      display: (display === 'block') ? 'none' : 'block',
    });
  }

  render() {
    const { display } = this.state;
    let element;
    if (display === 'none') {
      element = <AddIcon />;
    } else {
      element = <RemoveIcon />;
    }
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
                    Apply For Session: *
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control as="select">
                      <option>June 2020-2021</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Apply For Course: *
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control as="select">
                      <option>B.A. Sem 3</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEnrollmentNo">
                  <Form.Label column sm="3">
                    Enrollement Number: *
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" placeholder="Enter your enrollment number" />
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

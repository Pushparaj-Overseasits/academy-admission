import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class TwelfthExamDetails extends React.Component {
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
              12
              <sup>th</sup>
              {' '}
              Exam Details
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Board/University: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- Select Board/University --</option>
                            <option>Male</option>
                            <option>Female</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextTwelfthSeatNumber">
                        <Form.Label column sm="5">
                          Sear Number: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Seat Number" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Trial Attempt: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- Select Trial Attempt --</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextTwelfthSchoolName">
                        <Form.Label column sm="5">
                          School Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="School Name" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextTwelfthYearOfPassing">
                        <Form.Label column sm="5">
                          Year of Passing: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Year of Passing (Month/Year)" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Result Photo: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.File
                            className="position-relative"
                            required
                            name="file"
                            feedbackTooltip
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default TwelfthExamDetails;

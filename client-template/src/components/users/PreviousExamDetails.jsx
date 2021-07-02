import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class PreviousExamDetails extends React.Component {
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
              Previous Exam Details
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form encType='multipart/form-data'>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Board/University: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            as="select"
                            name="boardUniversityClg"
                            value={this.props.boardUniversityClg}
                            onChange={this.props.handleInputChange}
                          >
                            <option value="">-- Select Board/University --</option>
                            <option value="gujarat board">Gujarat Board</option>
                            <option value="cbse">CBSE</option>
                            <option value="icse">ICSE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextClgSubjectName">
                        <Form.Label column sm="5">
                          Subject Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="subjectName"
                            value={this.props.subjectName}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Subject Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Exam Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            as="select"
                            name="examName"
                            value={this.props.examName}
                            onChange={this.handleInputChange}
                          >
                            <option value="">-- Select Course --</option>
                            <option value="none">none</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextClgSeatNumber">
                        <Form.Label column sm="5">
                          Seat Number: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="seatNoClg"
                            value={this.props.seatNoClg}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Seat Number"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextClgYearOfPassing">
                        <Form.Label column sm="5">
                          Year of Passing: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="yearOfPassingClg"
                            value={this.props.yearOfPassingClg}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Year of Passing (Month/Year)"
                          />
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

export default PreviousExamDetails;

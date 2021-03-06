import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class PersonalDetails extends React.Component {
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
              Personal Details
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextDOB">
                        <Form.Label column sm="5">
                          Date Of Birth: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Date Of Birth (DD-MM-YYYY)" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Leave certificate: *
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
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextReligious">
                        <Form.Label column sm="5">
                          Religious: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Religious" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextNationality">
                        <Form.Label column sm="5">
                          Nationality: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Nationality" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Select Cast: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- Select Cast --</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Select Status: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- Select Status --</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          BPL Card: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- You have BPL Card --</option>
                            <option>Yes</option>
                            <option>No</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextMotherTongue">
                        <Form.Label column sm="5">
                          Mother Tongue: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Mother Tongue" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextAnnualIncome">
                        <Form.Label column sm="5">
                          Annual Income: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control type="text" placeholder="Annual Income" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          You Handicap ?: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control as="select">
                            <option>-- You Handicap ? --</option>
                            <option>Yes</option>
                            <option>No</option>
                          </Form.Control>
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

export default PersonalDetails;

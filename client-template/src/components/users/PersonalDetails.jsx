import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import 'react-datepicker/dist/react-datepicker.css'

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
              <Form encType='multipart/form-data'>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextDOB">
                        <Form.Label column sm="5">
                          Date Of Birth: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <DatePicker
                            selected={this.props.dateOfBirth}
                            onChange={this.props.handleDateChange}
                            dateFormat='dd/MM/yyyy'
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            customInput={
                              <Form.Control
                                name="dateOfBirth"
                                id="dateOfBirth"
                                type="text"
                                placeholder="Date Of Birth (DD-MM-YYYY)"
                              />
                            }
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Leave certificate: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.File
                            className="position-relative"
                            required
                            name="leaveCertificateFile"
                            feedbackTooltip
                            onChange={this.props.handleDocumentChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextReligious">
                        <Form.Label column sm="5">
                          Religious: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="religion"
                            value={this.props.religion}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Religious"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextNationality">
                        <Form.Label column sm="5">
                          Nationality: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="nationality"
                            value={this.props.nationality}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Nationality"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Select Cast: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            as="select"
                            name="cast"
                            value={this.props.cast}
                            onChange={this.props.handleInputChange}
                          >
                            <option value="">-- Select Cast --</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          Select Status: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="status"
                            value={this.props.status}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Status"
                          />
                        </Col>
                      </Form.Group> */}
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          BPL Card: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            as="select"
                            name="bpl"
                            value={this.props.bpl}
                            onChange={this.props.handleInputChange}
                          >
                            <option value="">-- You have BPL Card --</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextMotherTongue">
                        <Form.Label column sm="5">
                          Mother Tongue: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="motherTongue"
                            value={this.props.motherTongue}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Mother Tongue"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextAnnualIncome">
                        <Form.Label column sm="5">
                          Annual Income: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="annualIncome"
                            value={this.props.annualIncome}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Annual Income"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="5">
                          You Handicap ?: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="handicap"
                            value={this.props.handicap}
                            onChange={this.props.handleInputChange}
                            as="select"
                          >
                            <option value="">-- You Handicap ? --</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
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

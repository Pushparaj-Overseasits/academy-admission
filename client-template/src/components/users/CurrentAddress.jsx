import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class CurrentAddress extends React.Component {
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
              Current Address
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextVillage">
                        <Form.Label column sm="5">
                          Village: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="village"
                            value={this.props.village}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Village Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextCurrState">
                        <Form.Label column sm="5">
                          State: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="currState"
                            value={this.props.currState}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="State"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextCurrTalukaName">
                        <Form.Label column sm="5">
                          Taluka Name: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="currTaluka"
                            value={this.props.currTaluka}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Taluka Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextCurrDistrictName">
                        <Form.Label column sm="5">
                          District Name: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="currDistrict"
                            value={this.props.currDistrict}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="District Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextCurrPinCode">
                        <Form.Label column sm="5">
                          Pin Code: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="currPinCode"
                            value={this.props.currPinCode}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Pin Code"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextPhoneNumber">
                        <Form.Label column sm="5">
                          Phone Number: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="phone"
                            value={this.props.phone}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextAlternativeNumber">
                        <Form.Label column sm="5">
                          Alternative Number: <span style={{ color: 'red' }}>*</span>
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="alternate"
                            value={this.props.alternate}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Alternative Number"
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

export default CurrentAddress;

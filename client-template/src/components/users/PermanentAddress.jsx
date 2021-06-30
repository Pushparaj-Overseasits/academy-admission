import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class PermanentAddress extends React.Component {
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
              Permanent Address
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextAddress">
                        <Form.Label column sm="5">
                          Address: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="address"
                            value={this.props.addres
                              }
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Address"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextPermState">
                        <Form.Label column sm="5">
                          State: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="permState"
                            value={this.props.permState}
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
                      <Form.Group as={Row} controlId="formPlaintextPermTalukaName">
                        <Form.Label column sm="5">
                          Taluka Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="permTaluka"
                            value={this.props.permTaluka}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Taluka Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextPermDistrictName">
                        <Form.Label column sm="5">
                          District Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="permDistrict"
                            value={this.props.permDistrict}
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
                      <Form.Group as={Row} controlId="formPlaintextPermPinCode">
                        <Form.Label column sm="5">
                          Pin Code: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="permPinCode"
                            value={this.props.permPinCode}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Pin Code"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="5">
                          Email: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="email"
                            value={this.props.email}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Email"
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

export default PermanentAddress;

import React from 'react';
import {
  Card, Form, Row, Col, Button,
} from 'react-bootstrap';

/* eslint-disable-next-line react/prefer-stateless-function */
class Affidavit extends React.Component {
  render() {
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
            <Card.Body>
              <Form encType='multipart/form-data'>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Affidavit:
                  </Form.Label>
                  <Col sm="4">
                    <Form.File
                      className="position-relative"
                      required
                      name="file"
                      feedbackTooltip
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Text>Note: If any year gap then must add this</Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    inline
                    name="acceptTermsConditions"
                    checked={this.props.acceptTermsConditions}
                    onChange={this.props.handleInputChange}
                    type="checkbox"
                    label="Agree to Terms and Conditions"
                  />
                  {'| '}
                  <Card.Link>
                    Read Before Accept.
                  </Card.Link>
                </Form.Group>
                <Button block
                  variant="primary"
                  type="submit"
                  onClick={this.props.saveAdmissionData}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Affidavit;

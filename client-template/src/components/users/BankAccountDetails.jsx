
  import React from 'react';
import {
  Card, Form, Row, Col, Container,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class BankAccountDetails extends React.Component {
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
              Bank Account Details
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <Form encType='multipart/form-data'>
                <Container fluid>
                  <Row xs={1} sm={1} md={2}>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextBankACNo">
                        <Form.Label column sm="5">
                          Bank A/C No. : *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="bankACNo"
                            value={this.props.bankACNo}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Bank Account Number"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formPlaintextBranchName">
                        <Form.Label column sm="5">
                          Branch Name: *
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            name="branchName"
                            value={this.props.branchName}
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder="Bank Branch Name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group as={Row}>
                        <Form.Label column sm="6">
                          Upload Bank Passbook Photo: *
                        </Form.Label>
                        <Col sm="6">
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

export default BankAccountDetails;

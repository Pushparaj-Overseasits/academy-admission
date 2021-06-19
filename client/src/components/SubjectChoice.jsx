import React from 'react';
import {
  Card, Table,
} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

/* eslint-disable-next-line react/prefer-stateless-function */
class SubjectChoice extends React.Component {
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
              Subject Choose
            </Card.Header>
            <Card.Body
              style={{ display: `${display}` }}
            >
              <h6>Foundation Compulsory</h6>
              <hr />
              <h6>English</h6>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Core Compulsory (Main Subject)</th>
                    <th>Sub Subject</th>
                    <th>{}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input name="subjectChoice" type="radio" />
                      {' '}
                      Sanskrit
                    </td>
                    <td>Hindi</td>
                    <td>NSS</td>
                  </tr>
                  <tr>
                    <td>
                      <input name="subjectChoice" type="radio" />
                      {' '}
                      English
                    </td>
                    <td>Sanskrit</td>
                    <td>Environment Science</td>
                  </tr>
                  <tr>
                    <td>
                      <input name="subjectChoice" type="radio" />
                      {' '}
                      Gujarati
                    </td>
                    <td>Sociology</td>
                    <td>Disaster Management</td>
                  </tr>
                  <tr>
                    <td>
                      <input name="subjectChoice" type="radio" />
                      {' '}
                      Hindi
                    </td>
                    <td>Sociology</td>
                    <td>Disaster Management</td>
                  </tr>
                  <tr>
                    <td>
                      <input name="subjectChoice" type="radio" />
                      {' '}
                      Sociology
                    </td>
                    <td>Gujarati</td>
                    <td>NSS</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default SubjectChoice;

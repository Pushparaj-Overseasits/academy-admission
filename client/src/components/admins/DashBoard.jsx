import React from 'react';
import {
  Container, Row,
} from 'react-bootstrap';
import Sidebar from './Sidebar.jsx';
import CourseContent from './course/CourseContent.jsx';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebar: 'visible' };
    this.onClickSidebar = this.onClickSidebar.bind(this);
  }

  onClickSidebar() {
    const { sidebar } = this.state;
    this.setState({ sidebar: (sidebar === 'visible') ? 'hidden' : 'visible' });
  }

  render() {
    const { sidebar } = this.state;
    const style = (sidebar === 'visible') ? 'sidebar' : '';
    const sx = (sidebar === 'visible') ? 1 : 2;
    return (
      <>
        <Container fluid>
          <Row sm={sx} xs={sx}>
            <Sidebar visible={style} />
            <CourseContent onClickSidebar={this.onClickSidebar} />
          </Row>
        </Container>
      </>
    );
  }
}

export default DashBoard;

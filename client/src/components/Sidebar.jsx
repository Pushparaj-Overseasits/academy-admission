import React from 'react';
import { Col } from 'react-bootstrap';

function Sidebar(props) {
  const { visible } = props;
  return (
    <Col className={visible} md="3">
      <h3 style={{ margin: '10px' }}>Academy Admission</h3>
      <hr />
      <ul className="sidebarList">
        <li>Course</li>
        <li>Course</li>
        <li>Course</li>
        <li>Course</li>
        <li>Course</li>
      </ul>
    </Col>
  );
}

export default Sidebar;

import React from 'react';
import Header from './Header.jsx';
import Course from './Course.jsx';

/* eslint-disable-next-line react/prefer-stateless-function */
class StudentAdmission extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Course />
        <div>Footer</div>
      </>
    );
  }
}

export default StudentAdmission;

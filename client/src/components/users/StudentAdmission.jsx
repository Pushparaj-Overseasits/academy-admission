import React from 'react';
import Header from './Header.jsx';
import Course from './Course.jsx';
import SubjectChoice from './SubjectChoice.jsx';
import StudentDetails from './StudentDetails.jsx';
import CurrentAddress from './CurrentAddress.jsx';
import PermanentAddress from './PermanentAddress.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import BankAccountDetails from './BankAccountDetails.jsx';
import DocumentsDetails from './DocumentsDetails.jsx';
import TenthExamDetails from './TenthExamDetails.jsx';
import TwelfthExamDetails from './TwelfthExamDetails.jsx';
import PreviousExamDetails from './PreviousExamDetails.jsx';
import Affidavit from './Affidavit.jsx';

/* eslint-disable-next-line react/prefer-stateless-function */
class StudentAdmission extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Course />
        <SubjectChoice />
        <StudentDetails />
        <CurrentAddress />
        <PermanentAddress />
        <PersonalDetails />
        <BankAccountDetails />
        <DocumentsDetails />
        <TenthExamDetails />
        <TwelfthExamDetails />
        <PreviousExamDetails />
        <Affidavit />
        <div>Footer</div>
      </>
    );
  }
}

export default StudentAdmission;

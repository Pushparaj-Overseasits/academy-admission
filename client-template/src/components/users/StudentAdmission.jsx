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
         <link rel="stylesheet" href="/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles.css" />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <Course />
        </div>
        <div className="w-full mb-12 px-4">
        <SubjectChoice />
        </div>
        <div className="w-full mb-12 px-4">
        <StudentDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <CurrentAddress />
        </div>
        <div className="w-full mb-12 px-4">
        <PermanentAddress />
        </div>
        <div className="w-full mb-12 px-4">
        <PersonalDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <BankAccountDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <DocumentsDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <TenthExamDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <TwelfthExamDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <PreviousExamDetails />
        </div>
        <div className="w-full mb-12 px-4">
        <Affidavit />
        </div>
      </div>
        
      </>
    );
  }
}

export default StudentAdmission;

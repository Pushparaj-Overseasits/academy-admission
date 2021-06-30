import React from 'react';
// import Header from './Header.jsx';
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
  constructor(props) {
    super(props);
    this.state = {
      userId: '60d1d097cde1257eae9632eb', resultTypeId: '60d0d224cde1257eae9632eb', docTypeId: '60d0d224cde1257eae9999eb',
      sessionId: '', courseId: '', semId: '', enrollmentNo: '',
      subjectChoice: '',
      gender: '', firstName: '', surName: '',
      fatherName: '', motherName: '', grandFatherName: '',
      village: '', currState: '', currTaluka: '', currDistrict: '',
      currPinCode: '', phone: '', alternate: '',
      address: '', permState: '', permTaluka: '', permDistrict: '',
      permPinCode: '', email: '', dateOfBirth: '',
      religion: '', nationality: '', cast: '', status: '', bpl: '',
      motherTongue: '', annualIncome: '', handicap: '',
      bankACNo: '', branchName: '',
      adharCardNo: '', electionCardNo: '',
      boardUniversity10: '', seatNo10: '', trialAttemp10: '', schoolName10: '',
      yearOfPassing10: '',
      boardUniversity12: '', seatNo12: '', trialAttemp12: '', schoolName12: '',
      yearOfPassing12: '',
      boardUniversityClg: '', subjectName: '', examName: '', seatNoClg: '',
      yearOfPassingClg: '', acceptTermsConditions: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveAdmissionData = this.saveAdmissionData.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = (e.target.type === 'checkbox')? e.target.checked : e.target.value;
    this.setState({[name]: value});
    // console.log(`${name}: ${value}`);
  }

  saveAdmissionData(e) {
    e.preventDefault();
    if (!this.state.acceptTermsConditions) {
      alert('Please read and accept the terms and conditions!');
      return;
    }
    this.createStudent();
    alert('Admission successful! Thank You!');
  }

  async createStudent() {
    try {
      const {
        enrollmentNo, firstName, surName, phone, email, gender, dateOfBirth,
        cast, bpl, status, adharCardNo, electionCardNo, annualIncome, 
      } = this.state;
      const poverty = (bpl === 'yes');
      const response = await fetch('http://localhost:8000/admission/create-student', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          enrollmentNo, name: firstName+' '+surName, phone, email, gender,
          dob: dateOfBirth, cast, bpl: poverty, status, adhaar: adharCardNo,
          election: electionCardNo, annualIncome,
        })
      });
      const result = await response.json();
      this.setState({ userId: result.id });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createPersonal();
  }

  async createPersonal() {
    try {
      const {
        userId, fatherName, motherName, grandFatherName, alternate, religion,
        nationality, motherTongue,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-personal', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, fatherName, motherName, grandfatherName: grandFatherName,
          alternative: alternate, religion, nationality, motherTongue,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createAddress();
  }

  async createAddress() {
    try {
      const {
        userId, currState, village, currPinCode, currTaluka,
        permState, address, permPinCode, permTaluka,
      } = this.state;
      // saving Current Adress
      const responseCurr = await fetch('http://localhost:8000/admission/create-address', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, state: currState, city: village, pincode: currPinCode,
          taluka: currTaluka, addType: 'Current',
        })
      });
      const resultCurr = await responseCurr.json();
      console.log(resultCurr);
      // saving Permanent Adress
      const responsePerm = await fetch('http://localhost:8000/admission/create-address', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, state: permState, city: address, pincode: permPinCode,
          taluka: permTaluka, addType: 'Permanent',
        })
      });
      const resultPerm = await responsePerm.json();
      console.log(resultPerm);
    } catch (err) {
      console.log(err);
    }
    this.createBank();
  }

  async createBank() {
    try {
      const {
        userId, bankACNo, branchName,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-bank', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, bankAccount: bankACNo, branchName,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createDocument();
  }

  async createDocument() {
    const { userId, sessionId, courseId, docTypeId } = this.state;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'profilePic', status: 'submitted',
        })
      });
      const result = await response.json();
      console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log();
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId, status: 'submitted',
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log();
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId, sessionId, courseId, type: 'profilePic',
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log();
    }
    this.create10Result();
  }

  async create10Result() {
    try {
      const name='10th Exam Result';
      const status='submitted';
      const response = await fetch('http://localhost:8000/admission/create-result-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, status,
        })
      });
      const result = await response.json();
      console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        userId, resultTypeId, boardUniversity10, seatNo10, trialAttemp10,
        yearOfPassing10, schoolName10,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId, resultTypeId, boardUniversity: boardUniversity10, seatNo: seatNo10,
          Trial: trialAttemp10, yearOfPassing: yearOfPassing10, schoolName: schoolName10,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        resultTypeId, sessionId, courseId,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resultTypeId, sessionId, courseId, type: '10th result',
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.create12Result();
  }

  async create12Result() {
    try {
      const name='12th Exam Result';
      const status='submitted';
      const response = await fetch('http://localhost:8000/admission/create-result-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, status,
        })
      });
      const result = await response.json();
      console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        userId, resultTypeId, boardUniversity12, seatNo12, trialAttemp12,
        yearOfPassing12, schoolName12,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId, resultTypeId, boardUniversity: boardUniversity12, seatNo: seatNo12,
          Trial: trialAttemp12, yearOfPassing: yearOfPassing12, schoolName: schoolName12,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        resultTypeId, sessionId, courseId,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resultTypeId, sessionId, courseId, type: '12th result',
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createClgResult();
  }

  async createClgResult() {
    try {
      const name='College Result';
      const status='submitted';
      const response = await fetch('http://localhost:8000/admission/create-result-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, status,
        })
      });
      const result = await response.json();
      console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        userId, resultTypeId, boardUniversityClg, seatNoClg, subjectName, 
        yearOfPassingClg,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId, resultTypeId, boardUniversity: boardUniversityClg, seatNo: seatNoClg,
          yearOfPassing: yearOfPassingClg, schoolName: subjectName,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const {
        resultTypeId, sessionId, courseId,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-result-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resultTypeId, sessionId, courseId, type: 'Previous Exam Result result',
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      userId,
      sessionId, courseId, semId, enrollmentNo,
      subjectChoice,
      gender, firstName, surName,
      fatherName, motherName, grandFatherName,
      village, currState, currTaluka, currDistrict,
      currPinCode, phone, alternate,
      address, permState, permTaluka, permDistrict,
      permPinCode, email, dateOfBirth,
      religion, nationality, cast, status, bpl,
      motherTongue, annualIncome, handicap,
      bankACNo, branchName,
      adharCardNo, electionCardNo,
      boardUniversity10, seatNo10, trialAttemp10, schoolName10,
      yearOfPassing10,
      boardUniversity12, seatNo12, trialAttemp12, schoolName12,
      yearOfPassing12,
      boardUniversityClg, subjectName, examName, seatNoClg,
      yearOfPassingClg, acceptTermsConditions,
    } = this.state;
    return (
      <>
         <link rel="stylesheet" href="/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles.css" />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <Course
          sessionId={sessionId}
          courseId={courseId}
          enrollmentNo={enrollmentNo}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
          <SubjectChoice />
        </div>
        <div className="w-full mb-12 px-4">
        <StudentDetails
          userId={userId}
          sessionId={sessionId}
          courseId={courseId}
          //
          gender={gender}
          surName={surName}
          firstName={firstName}
          fatherName={fatherName}
          motherName={motherName}
          grandFatherName={grandFatherName}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <CurrentAddress
          village={village}
          currState={currState}
          currTaluka={currTaluka}
          currDistrict={currDistrict}
          currPinCode={currPinCode}
          phone={phone}
          alternate={alternate}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <PermanentAddress
          address={address}
          permState={permState}
          permTaluka={permTaluka}
          permDistrict={permDistrict}
          permPinCode={permPinCode}
          email={email}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <PersonalDetails
          dateOfBirth={dateOfBirth}
          religion={religion}
          nationality={nationality}
          cast={cast}
          status={status}
          bpl={bpl}
          motherTongue={motherTongue}
          annualIncome={annualIncome}
          handicap={handicap}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <BankAccountDetails
          bankACNo={bankACNo}
          branchName={branchName}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <DocumentsDetails
          adharCardNo={adharCardNo}
          electionCardNo={electionCardNo}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <TenthExamDetails
          boardUniversity10={boardUniversity10}
          seatNo10={seatNo10}
          trialAttemp10={trialAttemp10}
          schoolName10={schoolName10}
          yearOfPassing10={yearOfPassing10}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <TwelfthExamDetails
          boardUniversity12={boardUniversity12}
          seatNo12={seatNo12}
          trialAttemp12={trialAttemp12}
          schoolName12={schoolName12}
          yearOfPassing12={yearOfPassing12}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <PreviousExamDetails
          boardUniversityClg={boardUniversityClg}
          subjectName={subjectName}
          examName={examName}
          seatNoClg={seatNoClg}
          yearOfPassingClg={yearOfPassingClg}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <Affidavit
          acceptTermsConditions={acceptTermsConditions}
          handleInputChange={this.handleInputChange}
          saveAdmissionData={this.saveAdmissionData}
        />
        </div>
      </div>
        
      </>
    );
  }
}

export default StudentAdmission;

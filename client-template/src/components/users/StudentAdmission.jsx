import React from 'react';
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

class StudentAdmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '', resultTypeId: '', docTypeId: '',
      sessionId: '', courseId: '', semId: '', enrollmentNo: '',
      subjectChoice: '',
      gender: '', firstName: '', surName: '',
      fatherName: '', motherName: '', grandFatherName: '',
      profilePicFile: '', signPicFile: '',
      village: '', currState: '', currTaluka: '', currDistrict: '',
      currPinCode: '', phone: '', alternate: '',
      address: '', permState: '', permTaluka: '', permDistrict: '',
      permPinCode: '', email: '', dateOfBirth: '',
      leaveCertificateFile: '',
      religion: '', nationality: '', cast: '', status: 'Active', bpl: '',
      motherTongue: '', annualIncome: '', handicap: '',
      bankACNo: '', branchName: '', bankPassbookFile: '',
      adharCardNo: '', electionCardNo: '', adharCardFile: '', electionCardFile: '',
      boardUniversity10: '', seatNo10: '', trialAttemp10: '', schoolName10: '',
      yearOfPassing10: '', resultFile10: '',
      boardUniversity12: '', seatNo12: '', trialAttemp12: '', schoolName12: '',
      yearOfPassing12: '', resultFile12: '',
      boardUniversityClg: '', subjectName: '', examName: '', seatNoClg: '',
      yearOfPassingClg: '', resultFileClg: '', acceptTermsConditions: false, affidavitFile: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDocumentChange = this.handleDocumentChange.bind(this);
    this.saveAdmissionData = this.saveAdmissionData.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleDocumentChange(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
    // console.log(e.target.name, ' ', e.target.files[0]);
  }

  handleDateChange(date) {
    this.setState({ dateOfBirth: date });
    // console.log('dateOfBirth: ', date);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = (e.target.type === 'checkbox')? e.target.checked : e.target.value;
    this.setState({[name]: value});
    // console.log(`${name}: ${value}`);
  }

  saveAdmissionData(e) {
    e.preventDefault();
    // to check validation
    const {
      sessionId, courseId, enrollmentNo,
      gender, firstName, surName,
      fatherName, motherName, grandFatherName,
      profilePicFile, signPicFile,
      village, currState, currTaluka, currDistrict,
      currPinCode, phone, alternate,
      address, permState, permTaluka, permDistrict,
      permPinCode, email, dateOfBirth,
      leaveCertificateFile,
      religion, nationality, cast, status, bpl,
      motherTongue, annualIncome, handicap,
      bankACNo, branchName, bankPassbookFile,
      adharCardNo, electionCardNo, adharCardFile, electionCardFile,
      boardUniversity10, seatNo10, trialAttemp10, schoolName10,
      yearOfPassing10, resultFile10,
      boardUniversity12, seatNo12, trialAttemp12, schoolName12,
      yearOfPassing12, resultFile12,
      boardUniversityClg, subjectName, seatNoClg,
      yearOfPassingClg, resultFileClg, acceptTermsConditions,
    } = this.state;
    if (
      sessionId === '' || courseId === '' || enrollmentNo === '' ||
      gender === '' || firstName === '' || surName === '' ||
      fatherName === '' || motherName === '' || grandFatherName === '' ||
      profilePicFile === '' || signPicFile === '' ||
      village === '' || currState === '' || currTaluka === '' || currDistrict === '' ||
      currPinCode === '' || phone === '' || alternate === '' ||
      address === '' || permState === '' || permTaluka === '' || permDistrict === '' ||
      permPinCode === '' || email === '' || dateOfBirth === '' ||
      leaveCertificateFile === '' ||
      religion === '' || nationality === '' || cast === '' || status !== 'Active' || bpl === '' ||
      motherTongue === '' || annualIncome === '' || handicap === '' ||
      bankACNo === '' || branchName === '' || bankPassbookFile === '' ||
      adharCardNo === '' || electionCardNo === '' || adharCardFile === '' || electionCardFile === '' ||
      boardUniversity10 === '' || seatNo10 === '' || trialAttemp10 === '' || schoolName10 === '' ||
      yearOfPassing10 === '' || resultFile10 === '' ||
      boardUniversity12 === '' || seatNo12 === '' || trialAttemp12 === '' || schoolName12 === '' ||
      yearOfPassing12 === '' || resultFile12 === '' ||
      boardUniversityClg === '' || subjectName === '' || seatNoClg === '' ||
      yearOfPassingClg === '' || resultFileClg === ''
    ) {
      alert('Fields marked with * are required to be filled! Please fill all the required fields before submitting');
      return;
    }
    // if (
    //   typeof(currPinCode) !== "number" || typeof(phone) !== "number" || typeof(alternate) !== "number" ||
    //   typeof(permPinCode) !== "number" || typeof(annualIncome) !== "number" || typeof(bankACNo) !== "number" ||
    //   typeof(adharCardNo) !== "number" || typeof(electionCardNo) !== "number" || typeof(seatNo10) !== "number" ||
    //   typeof(yearOfPassing10) !== "number" || typeof(seatNo12) !== "number" || typeof(yearOfPassing12) !== "number" ||
    //   typeof(seatNoClg) !== "number" || typeof(yearOfPassingClg) !== "number"
    // ) {
    //   alert('Pincodes, Phone Numbers, Income, Bank Account Number, Adhar and Election Card numbers, Seat Numbers, ' +
    //    ' and year of passing all should only contain numbers!');
    //   return;
    // }
    if (!acceptTermsConditions) {
      alert('Please read and accept the terms and conditions!');
      return;
    }
    this.createStudent();
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
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createPersonal();
  }

  async createPersonal() {
    while(this.state.userId === '') console.log('waiting');
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
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createAdmission();
  }

  async createAdmission() {
    try {
      const {
        userId, sessionId, courseId, semId,
      } = this.state;
      const response = await fetch('http://localhost:8000/admission/create-admission', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, sessionId, courseId, semId, date: new Date(Date.now()), fee: '0', status: 'not submited',
        })
      });
      await response.json();
      // console.log(result);
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
      await responseCurr.json();
      // console.log(resultCurr);
      // saving Permanent Adress
      const responsePerm = await fetch('http://localhost:8000/admission/create-address', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, state: permState, city: address, pincode: permPinCode,
          taluka: permTaluka, addType: 'Permanent',
        })
      });
      await responsePerm.json();
      // console.log(resultPerm);
    } catch (err) {
      console.log(err);
    }
    this.createBank();
  }

  async createBank() {
    const {
      userId, bankACNo, branchName,
    } = this.state;
    try {
      const response = await fetch('http://localhost:8000/admission/create-bank', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId, bankAccount: bankACNo, branchName,
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createProfileDocument();
  }

  async createProfileDocument() {
    const { userId, sessionId, courseId, profilePicFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Profile Pic', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', profilePicFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Profile Pic',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createSignatureDocument();
  }

  async createSignatureDocument() {
    const { userId, sessionId, courseId, signPicFile, } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Signature Pic', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', signPicFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Signature Pic',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createLeaveCertificateDocument();
  }

  async createLeaveCertificateDocument() {
    const { userId, sessionId, courseId, leaveCertificateFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Leave Certificate', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', leaveCertificateFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Leave Certificate',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createBankDocument();
  }

  async createBankDocument() {
    const { userId, sessionId, courseId, bankPassbookFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Bank Passbook', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', bankPassbookFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Bank Passbook',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createAdharDocument();
  }

  async createAdharDocument() {
    const { userId, sessionId, courseId, adharCardFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Adhar Card', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', adharCardFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Adhar Card',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createElectionDocument();
  }

  async createElectionDocument() {
    const { userId, sessionId, courseId, electionCardFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Election Card', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', electionCardFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Election Card',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createTenthDocument();
  }

  async createTenthDocument() {
    const { userId, sessionId, courseId, resultFile10 } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: '10th Result', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', resultFile10);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: '10th Result',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createTwelfthDocument();
  }

  async createTwelfthDocument() {
    const { userId, sessionId, courseId, resultFile12 } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: '12th Result', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', resultFile12);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: '12th Result',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    this.createPreviousDocument();
  }

  async createPreviousDocument() {
    const { userId, sessionId, courseId, resultFileClg, affidavitFile } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Previous Exam Result', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', resultFileClg);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Previous Exam Result',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    if (affidavitFile === '') {
      this.create10Result();
    } else {
      this.createAffidavitDocument();
    }
  }

  async createAffidavitDocument() {
    const { userId, sessionId, courseId, affidavitFile, } = this.state;
    let fileName;
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-type', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Affidavit', status: 'submitted',
        })
      });
      const result = await response.json();
      // console.log(result);
      this.setState({ docTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait;
    while(this.state.docTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    try {
      const uploadData = new FormData();
      uploadData.append('file', affidavitFile);
      const response = await fetch('http://localhost:8000/admission/upload-document', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();
      fileName = result.fileName;
      // console.log(result);
    } catch(err) {
      console.log(err);
    }
    longWait = 0;
    while(fileName === undefined) {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
    }
    // console.log(fileName);
    try {
      const response = await fetch('http://localhost:8000/admission/create-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, docTypeId: this.state.docTypeId, url: fileName, status: 'submitted',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch('http://localhost:8000/admission/create-document-master', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docTypeId: this.state.docTypeId, sessionId, courseId, type: 'Affidavit',
        })
      });
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
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
      // console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait = 0;
    while(this.state.resultTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
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
      await response.json();
      // console.log(result);
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
      await response.json();
      // console.log(result);
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
      // console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait = 0;
    while(this.state.resultTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
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
      await response.json();
      // console.log(result);
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
      await response.json();
      // console.log(result);
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
      // console.log(result);
      this.setState({ resultTypeId: result.id });
    } catch (err) {
      console.log(err);
    }
    let longWait = 0;
    while(this.state.resultTypeId === '') {
      console.log('waiting');
      if (longWait++ === 150000) {
        alert('Server is not responding. Some error occurded :(');
        break;
      }
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
      await response.json();
      // console.log(result);
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
      await response.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    alert('Admission successful! Thank You!');
    document.location.reload();
  }

  clearForm() {
    this.setState({
      userId: '', resultTypeId: '', docTypeId: '',
      sessionId: '', courseId: '', semId: '', enrollmentNo: '',
      subjectChoice: '',
      gender: '', firstName: '', surName: '',
      fatherName: '', motherName: '', grandFatherName: '',
      profilePicFile: '', signPicFile: '',
      village: '', currState: '', currTaluka: '', currDistrict: '',
      currPinCode: '', phone: '', alternate: '',
      address: '', permState: '', permTaluka: '', permDistrict: '',
      permPinCode: '', email: '', dateOfBirth: '',
      leaveCertificateFile: '',
      religion: '', nationality: '', cast: '', status: 'Active', bpl: '',
      motherTongue: '', annualIncome: '', handicap: '',
      bankACNo: '', branchName: '', bankPassbookFile: '',
      adharCardNo: '', electionCardNo: '', adharCardFile: '', electionCardFile: '',
      boardUniversity10: '', seatNo10: '', trialAttemp10: '', schoolName10: '',
      yearOfPassing10: '', resultFile10: '',
      boardUniversity12: '', seatNo12: '', trialAttemp12: '', schoolName12: '',
      yearOfPassing12: '', resultFile12: '',
      boardUniversityClg: '', subjectName: '', examName: '', seatNoClg: '',
      yearOfPassingClg: '', resultFileClg: '', acceptTermsConditions: false,
      affidavitFile: '',
    });
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      userId,
      sessionId, courseId, semId, enrollmentNo,
      subjectChoice,
      gender, firstName, surName,
      fatherName, motherName, grandFatherName,
      profilePicFile, signPicFile,
      village, currState, currTaluka, currDistrict,
      currPinCode, phone, alternate,
      address, permState, permTaluka, permDistrict,
      permPinCode, email, dateOfBirth,
      leaveCertificateFile,
      religion, nationality, cast, status, bpl,
      motherTongue, annualIncome, handicap,
      bankACNo, branchName, bankPassbookFile,
      adharCardNo, electionCardNo, adharCardFile, electionCardFile,
      boardUniversity10, seatNo10, trialAttemp10, schoolName10,
      yearOfPassing10, resultFile10,
      boardUniversity12, seatNo12, trialAttemp12, schoolName12,
      yearOfPassing12, resultFile12,
      boardUniversityClg, subjectName, examName, seatNoClg,
      yearOfPassingClg, resultFileClg, acceptTermsConditions, affidavitFile,
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
          handleDocumentChange={this.handleDocumentChange}
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
          handleDocumentChange={this.handleDocumentChange}
          handleDateChange={this.handleDateChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <BankAccountDetails
          bankACNo={bankACNo}
          branchName={branchName}
          handleInputChange={this.handleInputChange}
          handleDocumentChange={this.handleDocumentChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <DocumentsDetails
          adharCardNo={adharCardNo}
          electionCardNo={electionCardNo}
          handleInputChange={this.handleInputChange}
          handleDocumentChange={this.handleDocumentChange}
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
          handleDocumentChange={this.handleDocumentChange}
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
          handleDocumentChange={this.handleDocumentChange}
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
          handleDocumentChange={this.handleDocumentChange}
        />
        </div>
        <div className="w-full mb-12 px-4">
        <Affidavit
          acceptTermsConditions={acceptTermsConditions}
          handleInputChange={this.handleInputChange}
          saveAdmissionData={this.saveAdmissionData}
          handleDocumentChange={this.handleDocumentChange}
        />
        </div>
      </div>
        
      </>
    );
  }
}

export default StudentAdmission;

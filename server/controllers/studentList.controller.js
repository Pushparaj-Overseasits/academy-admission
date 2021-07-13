const AdmissionModel = require('../models/user/admission');
const StudentModel = require('../models/user/student');
const CourseModel = require('../models/admin/course');
const SessionModel = require('../models/admin/session');
const PersonalModel = require('../models/user/personal');
const AddressModel = require('../models/user/address');
const BankModel = require('../models/user/bank');
const ResultMapModel = require('../models/user/resultMap');
const ResultDetailsModel = require('../models/user/resultDetails');
const DocumentModel = require('../models/user/document');
const DocumentTypeModel = require('../models/user/docType');

const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await AdmissionModel.find({});
    res.status(200).send(admissions);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const object = {
      userId: '', name: '', courseId: '', sessionId: '', phone: '',
    };
    const admissions = await AdmissionModel.findById(req.params.id);
    object.userId = admissions.userId;
    const course = await CourseModel.find({ id: admissions.courseId });
    object.courseId = course[0].name;
    const session = await SessionModel.find({ id: admissions.sessionId });
    object.sessionId = session[0].name;
    const students = await StudentModel.find({ id: admissions.userId });
    object.name = students[0].name;
    object.phone = students[0].phone;
    console.log(object);
    res.status(200).send(object);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getAllDetailsById = async (req, res) => {
  const userId = req.params.id;
  try {
    const student = await StudentModel.find({ id: userId });
    const {
      enrollmentNo, name, phone, email, gender, dob, cast, bpl,
      status, adhaar, election, annualIncome,
    } = student[0];
    const personal = await PersonalModel.find({ userId });
    const {
      fatherName, motherName, grandfatherName, alternative, religion, nationality, motherTongue,
    } = personal[0];
    const admission = await AdmissionModel.find({ userId });
    const {
      courseId, sessionId,
    } = admission[0];
    const course = await CourseModel.find({ id: courseId });
    const session = await SessionModel.find({ id: sessionId });
    const currAddress = await AddressModel.find({ userId, addType: 'Current' });
    const permAddress = await AddressModel.find({ userId, addType: 'Permanent' });
    const bank = await BankModel.find({ userId });
    const resultDetails = await ResultDetailsModel.find({ userId });
    const result = await ResultMapModel.find({ resultTypeId: resultDetails[0].resultTypeId });
    let tenthResult;
    let twelfthResult;
    let ClgResult;
    /* eslint-disable prefer-destructuring */
    if (result[0].type === '10th result') {
      tenthResult = resultDetails[0];
    } else if (result[0].type === '12th result') {
      twelfthResult = resultDetails[0];
    } else if (result[0].type === 'Previous Exam Result result') {
      ClgResult = resultDetails[0];
    }
    const result1 = await ResultMapModel.find({ resultTypeId: resultDetails[1].resultTypeId });
    if (result1[0].type === '10th result') {
      tenthResult = resultDetails[1];
    } else if (result1[0].type === '12th result') {
      twelfthResult = resultDetails[1];
    } else if (result1[0].type === 'Previous Exam Result result') {
      ClgResult = resultDetails[1];
    }
    const result2 = await ResultMapModel.find({ resultTypeId: resultDetails[2].resultTypeId });
    if (result2[0].type === '10th result') {
      tenthResult = resultDetails[2];
    } else if (result2[0].type === '12th result') {
      twelfthResult = resultDetails[2];
    } else if (result2[0].type === 'Previous Exam Result result') {
      ClgResult = resultDetails[2];
    }
    const documents = await DocumentModel.find({ userId });
    let profilePic;
    let signaturePic;
    let leaveCertificate;
    let bankPassbook;
    let adharCard;
    let electionCard;
    let tenthFile;
    let twelfthFile;
    let previousFile;
    let affidavitFile = '';
    if (documents.length < 9) {
      res.status(404).send({ message: 'Documents not found!' });
      return;
    }
    console.log(documents);
    const document = await DocumentTypeModel.find({ id: documents[0].docTypeId });
    console.log(document);
    if (document[0].name === 'Profile Pic') {
      profilePic = documents[0].url;
    } else if (document[0].name === 'Signature Pic') {
      signaturePic = documents[0].url;
    } else if (document[0].name === 'Leave Certificate') {
      leaveCertificate = documents[0].url;
    } else if (document[0].name === 'Bank Passbook') {
      bankPassbook = documents[0].url;
    } else if (document[0].name === 'Adhar Card') {
      adharCard = documents[0].url;
    } else if (document[0].name === 'Election Card') {
      electionCard = documents[0].url;
    } else if (document[0].name === '10th Result') {
      tenthFile = documents[0].url;
    } else if (document[0].name === '12th Result') {
      twelfthFile = documents[0].url;
    } else if (document[0].name === 'Previous Exam Result') {
      previousFile = documents[0].url;
    } else if (document[0].name === 'Affidavit') {
      affidavitFile = documents[0].url;
    }
    const document1 = await DocumentTypeModel.find({ id: documents[1].docTypeId });
    console.log(document1);
    if (document1[0].name === 'Profile Pic') {
      profilePic = documents[1].url;
    } else if (document1[0].name === 'Signature Pic') {
      signaturePic = documents[1].url;
    } else if (document1[0].name === 'Leave Certificate') {
      leaveCertificate = documents[1].url;
    } else if (document1[0].name === 'Bank Passbook') {
      bankPassbook = documents[1].url;
    } else if (document1[0].name === 'Adhar Card') {
      adharCard = documents[1].url;
    } else if (document1[0].name === 'Election Card') {
      electionCard = documents[1].url;
    } else if (document1[0].name === '10th Result') {
      tenthFile = documents[1].url;
    } else if (document1[0].name === '12th Result') {
      twelfthFile = documents[1].url;
    } else if (document1[0].name === 'Previous Exam Result') {
      previousFile = documents[1].url;
    } else if (document1[0].name === 'Affidavit') {
      affidavitFile = documents[1].url;
    }
    const document2 = await DocumentTypeModel.find({ id: documents[2].docTypeId });
    if (document2[0].name === 'Profile Pic') {
      profilePic = documents[2].url;
    } else if (document2[0].name === 'Signature Pic') {
      signaturePic = documents[2].url;
    } else if (document2[0].name === 'Leave Certificate') {
      leaveCertificate = documents[2].url;
    } else if (document2[0].name === 'Bank Passbook') {
      bankPassbook = documents[2].url;
    } else if (document2[0].name === 'Adhar Card') {
      adharCard = documents[2].url;
    } else if (document2[0].name === 'Election Card') {
      electionCard = documents[2].url;
    } else if (document2[0].name === '10th Result') {
      tenthFile = documents[2].url;
    } else if (document2[0].name === '12th Result') {
      twelfthFile = documents[2].url;
    } else if (document2[0].name === 'Previous Exam Result') {
      previousFile = documents[2].url;
    } else if (document2[0].name === 'Affidavit') {
      affidavitFile = documents[2].url;
    }
    const document3 = await DocumentTypeModel.find({ id: documents[3].docTypeId });
    if (document3[0].name === 'Profile Pic') {
      profilePic = documents[3].url;
    } else if (document3[0].name === 'Signature Pic') {
      signaturePic = documents[3].url;
    } else if (document3[0].name === 'Leave Certificate') {
      leaveCertificate = documents[3].url;
    } else if (document3[0].name === 'Bank Passbook') {
      bankPassbook = documents[3].url;
    } else if (document3[0].name === 'Adhar Card') {
      adharCard = documents[3].url;
    } else if (document3[0].name === 'Election Card') {
      electionCard = documents[3].url;
    } else if (document3[0].name === '10th Result') {
      tenthFile = documents[3].url;
    } else if (document3[0].name === '12th Result') {
      twelfthFile = documents[3].url;
    } else if (document3[0].name === 'Previous Exam Result') {
      previousFile = documents[3].url;
    } else if (document3[0].name === 'Affidavit') {
      affidavitFile = documents[3].url;
    }
    const document4 = await DocumentTypeModel.find({ id: documents[4].docTypeId });
    if (document4[0].name === 'Profile Pic') {
      profilePic = documents[4].url;
    } else if (document4[0].name === 'Signature Pic') {
      signaturePic = documents[4].url;
    } else if (document4[0].name === 'Leave Certificate') {
      leaveCertificate = documents[4].url;
    } else if (document4[0].name === 'Bank Passbook') {
      bankPassbook = documents[4].url;
    } else if (document4[0].name === 'Adhar Card') {
      adharCard = documents[4].url;
    } else if (document4[0].name === 'Election Card') {
      electionCard = documents[4].url;
    } else if (document4[0].name === '10th Result') {
      tenthFile = documents[4].url;
    } else if (document4[0].name === '12th Result') {
      twelfthFile = documents[4].url;
    } else if (document4[0].name === 'Previous Exam Result') {
      previousFile = documents[4].url;
    } else if (document4[0].name === 'Affidavit') {
      affidavitFile = documents[4].url;
    }
    const document5 = await DocumentTypeModel.find({ id: documents[5].docTypeId });
    if (document5[0].name === 'Profile Pic') {
      profilePic = documents[5].url;
    } else if (document5[0].name === 'Signature Pic') {
      signaturePic = documents[5].url;
    } else if (document5[0].name === 'Leave Certificate') {
      leaveCertificate = documents[5].url;
    } else if (document5[0].name === 'Bank Passbook') {
      bankPassbook = documents[5].url;
    } else if (document5[0].name === 'Adhar Card') {
      adharCard = documents[5].url;
    } else if (document5[0].name === 'Election Card') {
      electionCard = documents[5].url;
    } else if (document5[0].name === '10th Result') {
      tenthFile = documents[5].url;
    } else if (document5[0].name === '12th Result') {
      twelfthFile = documents[5].url;
    } else if (document5[0].name === 'Previous Exam Result') {
      previousFile = documents[5].url;
    } else if (document5[0].name === 'Affidavit') {
      affidavitFile = documents[5].url;
    }
    const document6 = await DocumentTypeModel.find({ id: documents[6].docTypeId });
    if (document6[0].name === 'Profile Pic') {
      profilePic = documents[6].url;
    } else if (document6[0].name === 'Signature Pic') {
      signaturePic = documents[6].url;
    } else if (document6[0].name === 'Leave Certificate') {
      leaveCertificate = documents[6].url;
    } else if (document6[0].name === 'Bank Passbook') {
      bankPassbook = documents[6].url;
    } else if (document6[0].name === 'Adhar Card') {
      adharCard = documents[6].url;
    } else if (document6[0].name === 'Election Card') {
      electionCard = documents[6].url;
    } else if (document6[0].name === '10th Result') {
      tenthFile = documents[6].url;
    } else if (document6[0].name === '12th Result') {
      twelfthFile = documents[6].url;
    } else if (document6[0].name === 'Previous Exam Result') {
      previousFile = documents[6].url;
    } else if (document6[0].name === 'Affidavit') {
      affidavitFile = documents[6].url;
    }
    const document7 = await DocumentTypeModel.find({ id: documents[7].docTypeId });
    if (document7[0].name === 'Profile Pic') {
      profilePic = documents[7].url;
    } else if (document7[0].name === 'Signature Pic') {
      signaturePic = documents[7].url;
    } else if (document7[0].name === 'Leave Certificate') {
      leaveCertificate = documents[7].url;
    } else if (document7[0].name === 'Bank Passbook') {
      bankPassbook = documents[7].url;
    } else if (document7[0].name === 'Adhar Card') {
      adharCard = documents[7].url;
    } else if (document7[0].name === 'Election Card') {
      electionCard = documents[7].url;
    } else if (document7[0].name === '10th Result') {
      tenthFile = documents[7].url;
    } else if (document7[0].name === '12th Result') {
      twelfthFile = documents[7].url;
    } else if (document7[0].name === 'Previous Exam Result') {
      previousFile = documents[7].url;
    } else if (document7[0].name === 'Affidavit') {
      affidavitFile = documents[7].url;
    }
    const document8 = await DocumentTypeModel.find({ id: documents[8].docTypeId });
    if (document8[0].name === 'Profile Pic') {
      profilePic = documents[8].url;
    } else if (document8[0].name === 'Signature Pic') {
      signaturePic = documents[8].url;
    } else if (document8[0].name === 'Leave Certificate') {
      leaveCertificate = documents[8].url;
    } else if (document8[0].name === 'Bank Passbook') {
      bankPassbook = documents[8].url;
    } else if (document8[0].name === 'Adhar Card') {
      adharCard = documents[8].url;
    } else if (document8[0].name === 'Election Card') {
      electionCard = documents[8].url;
    } else if (document8[0].name === '10th Result') {
      tenthFile = documents[8].url;
    } else if (document8[0].name === '12th Result') {
      twelfthFile = documents[8].url;
    } else if (document8[0].name === 'Previous Exam Result') {
      previousFile = documents[8].url;
    } else if (document8[0].name === 'Affidavit') {
      affidavitFile = documents[8].url;
    }
    if (documents.length === 10) {
      const document9 = await DocumentTypeModel.find({ id: documents[9].docTypeId });
      if (document9[0].name === 'Profile Pic') {
        profilePic = documents[9].url;
      } else if (document9[0].name === 'Signature Pic') {
        signaturePic = documents[9].url;
      } else if (document9[0].name === 'Leave Certificate') {
        leaveCertificate = documents[9].url;
      } else if (document9[0].name === 'Bank Passbook') {
        bankPassbook = documents[9].url;
      } else if (document9[0].name === 'Adhar Card') {
        adharCard = documents[9].url;
      } else if (document9[0].name === 'Election Card') {
        electionCard = documents[9].url;
      } else if (document9[0].name === '10th Result') {
        tenthFile = documents[9].url;
      } else if (document9[0].name === '12th Result') {
        twelfthFile = documents[9].url;
      } else if (document9[0].name === 'Previous Exam Result') {
        previousFile = documents[9].url;
      } else if (document9[0].name === 'Affidavit') {
        affidavitFile = documents[9].url;
      }
    }
    /* eslint-disable object-property-newline */
    const details = {
      userId, enrollmentNo,
      name, phone, email, gender, dob, cast, bpl,
      status, adhaar, election, annualIncome,
      fatherName, motherName, grandfatherName, alternative, religion, nationality, motherTongue,
      courseId: course[0].name, sessionId: session[0].name,
      currState: currAddress[0].state, village: currAddress[0].city,
      currPincode: currAddress[0].pincode, currTaluka: currAddress[0].taluka,
      permState: permAddress[0].state, address: permAddress[0].city,
      permPincode: permAddress[0].pincode, permTaluka: permAddress[0].taluka,
      bankACNo: bank[0].bankAccount, branchName: bank[0].branchName,
      boardUniversity10: tenthResult.boardUniversity, seatNo10: tenthResult.seatNo,
      trialAttemp10: tenthResult.Trial, yearOfPassing10: tenthResult.yearOfPassing,
      schoolName10: tenthResult.schoolName,
      boardUniversity12: twelfthResult.boardUniversity, seatNo12: twelfthResult.seatNo,
      trialAttemp12: twelfthResult.Trial, yearOfPassing12: twelfthResult.yearOfPassing,
      schoolName12: twelfthResult.schoolName,
      boardUniversityClg: ClgResult.boardUniversity, seatNoClg: ClgResult.seatNo,
      yearOfPassingClg: ClgResult.yearOfPassing, subjectName: ClgResult.schoolName,
      profilePic, signaturePic, leaveCertificate, bankPassbook, adharCard, electionCard,
      tenthFile, twelfthFile, previousFile, affidavitFile,
    };
    res.status(200).send(details);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getAllAdmissions,
  getById,
  getAllDetailsById,
};

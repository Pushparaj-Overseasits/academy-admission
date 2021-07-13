const mongoose = require('mongoose');
const StudentModel = require('../models/user/student');
const AdmissionModel = require('../models/user/admission');
const AddressModel = require('../models/user/address');
const BankModel = require('../models/user/bank');
const DocTypeModel = require('../models/user/docType');
const DocumentModel = require('../models/user/document');
const DocumentMasterModel = require('../models/user/documentMaster');
const FeeSubmitModel = require('../models/user/feeSubmit');
const PersonalModel = require('../models/user/personal');
const ResultDetailsModel = require('../models/user/resultDetails');
const ResultMapModel = require('../models/user/resultMap');
const ResultTypeModel = require('../models/user/resultType');

const createStudent = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdStudent = new StudentModel(req.body);
    await createdStudent.save();
    res.status(200).send(createdStudent);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

const createAdmission = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.semId = mongoose.Types.ObjectId();
    const createdAdmission = new AdmissionModel(req.body);
    await createdAdmission.save();
    res.status(200).send(createdAdmission);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createAddress = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const createdAddress = new AddressModel(req.body);
    await createdAddress.save();
    res.status(200).send(createdAddress);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createBank = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const createdBank = new BankModel(req.body);
    await createdBank.save();
    res.status(200).send(createdBank);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createDocType = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdDocType = new DocTypeModel(req.body);
    await createdDocType.save();
    res.status(200).send(createdDocType);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const uploadDocument = async (req, res) => {
  try {
    if (req.files === null) {
      res.status(400).json({ message: 'No file uploaded' });
      return;
    }
    const { file } = req.files;
    const date = new Date(Date.now());
    const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const fileName = `${day}-${month}-${year}_${hour}-${minutes}-${seconds}_${file.name}`;
    // console.log(fileName);
    file.mv(`${__dirname}/../public/uploads/documents/${fileName}`, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.json({ fileName, message: 'Uploaded Successfully!' });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createDocument = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const createdDocument = new DocumentModel(req.body);
    await createdDocument.save();
    res.status(200).send(createdDocument);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createDocumentMaster = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.semId = mongoose.Types.ObjectId();
    const createdDocumentMaster = new DocumentMasterModel(req.body);
    await createdDocumentMaster.save();
    res.status(200).send(createdDocumentMaster);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createFeeSubmit = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.admissionId = '60d1d321cde9684eae5941eb';
    const createdFeeSubmit = new FeeSubmitModel(req.body);
    await createdFeeSubmit.save();
    res.status(200).send(createdFeeSubmit);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createPersonal = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const createdPersonal = new PersonalModel(req.body);
    await createdPersonal.save();
    res.status(200).send(createdPersonal);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createResultDetails = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const createdResultDetails = new ResultDetailsModel(req.body);
    await createdResultDetails.save();
    res.status(200).send(createdResultDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createResultMap = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.semId = mongoose.Types.ObjectId();
    const createdResultMap = new ResultMapModel(req.body);
    await createdResultMap.save();
    res.status(200).send(createdResultMap);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createResultType = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdResultType = new ResultTypeModel(req.body);
    await createdResultType.save();
    res.status(200).send(createdResultType);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

module.exports = {
  createStudent,
  createAdmission,
  createAddress,
  createBank,
  createDocType,
  uploadDocument,
  createDocument,
  createDocumentMaster,
  createFeeSubmit,
  createPersonal,
  createResultDetails,
  createResultMap,
  createResultType,
};

const express = require('express');
const {
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
} = require('../controllers/admission.controller');

const router = express.Router();

router.route('/create-student').post(createStudent);
router.route('/create-admission').post(createAdmission);
router.route('/create-address').post(createAddress);
router.route('/create-bank').post(createBank);
router.route('/create-document-type').post(createDocType);
router.route('/upload-document').post(uploadDocument);
router.route('/create-document').post(createDocument);
router.route('/create-document-master').post(createDocumentMaster);
router.route('/create-feesubmit').post(createFeeSubmit);
router.route('/create-personal').post(createPersonal);
router.route('/create-result-details').post(createResultDetails);
router.route('/create-result-map').post(createResultMap);
router.route('/create-result-type').post(createResultType);

module.exports = router;

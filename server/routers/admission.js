const express = require('express');
const multer = require('multer');
const {
  createStudent,
  createAdmission,
  createAddress,
  createBank,
  createDocType,
  createDocument,
  createDocumentMaster,
  createFeeSubmit,
  createPersonal,
  createResultDetails,
  createResultMap,
  createResultType,
} = require('../controllers/admission.controller');

const router = express.Router();

// Storage for Documents
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads/documents');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

router.route('/create-student').post(createStudent);
router.route('/create-admission').post(createAdmission);
router.route('/create-address').post(createAddress);
router.route('/create-bank').post(createBank);
router.route('/create-document-type').post(createDocType);
router.route('/create-document').post(upload.single('file'), createDocument);
router.route('/create-document-master').post(createDocumentMaster);
router.route('/create-feesubmit').post(createFeeSubmit);
router.route('/create-personal').post(createPersonal);
router.route('/create-result-details').post(createResultDetails);
router.route('/create-result-map').post(createResultMap);
router.route('/create-result-type').post(createResultType);

module.exports = router;

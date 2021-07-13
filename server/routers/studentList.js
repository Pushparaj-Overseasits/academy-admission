const express = require('express');
const {
  getAllAdmissions,
  getById,
  getAllDetailsById,
} = require('../controllers/studentList.controller');

const router = express.Router();

router.route('/all-admissions').get(getAllAdmissions);
router.route('/:id').get(getById);
router.route('/all-details/:id').get(getAllDetailsById);

module.exports = router;

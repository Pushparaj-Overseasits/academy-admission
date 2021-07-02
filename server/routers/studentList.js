const express = require('express');
const {
  getAllAdmissions,
  getById,
} = require('../controllers/studentList.controller');

const router = express.Router();

router.route('/all-admissions').get(getAllAdmissions);
router.route('/:id').get(getById);

module.exports = router;

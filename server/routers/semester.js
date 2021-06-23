const express = require('express');
const {
  getAllSemester,
  getById,
  createSemester,
  updateSemester,
  deleteSemester,
} = require('../controllers/semester.controller');

const router = express.Router();

router.route('/all').get(getAllSemester);
router.route('/:id').get(getById);
router.route('/create').post(createSemester);
router.route('/:id').put(updateSemester);
router.route('/:id').delete(deleteSemester);

module.exports = router;

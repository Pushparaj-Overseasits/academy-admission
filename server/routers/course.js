const express = require('express');
const {
  getAllCourse,
  getById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const router = express.Router();

router.route('/all').get(getAllCourse);
router.route('/:id').get(getById);
router.route('/create').post(createCourse);
router.route('/:id').put(updateCourse);
router.route('/:id').delete(deleteCourse);

module.exports = router;

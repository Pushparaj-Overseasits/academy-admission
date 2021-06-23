const express = require('express');
const {
  getAllCourse,
  getById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const router = express.Router();

router.route('/course/:id').get(getById);
router.route('/courses').get(getAllCourse);
router.route('/course').post(createCourse);
router.route('/course/:id').put(updateCourse);
router.route('/course/:id').delete(deleteCourse);

module.exports = router;

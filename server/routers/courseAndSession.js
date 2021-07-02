const express = require('express');
const {
  getAllCourSess,
  loadById,
  getById,
  createCourSess,
  updateCourSess,
  deleteCourSess,
} = require('../controllers/courseSession.controller');

const router = express.Router();

router.route('/all').get(getAllCourSess);
router.route('/direct-load/:id').get(loadById);
router.route('/:id').get(getById);
router.route('/create').post(createCourSess);
router.route('/:id').put(updateCourSess);
router.route('/:id').delete(deleteCourSess);

module.exports = router;

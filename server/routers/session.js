const express = require('express');
const {
  getAllSession,
  getById,
  createSession,
  updateSession,
  deleteSession,
} = require('../controllers/session.controller');

const router = express.Router();

router.route('/all').get(getAllSession);
router.route('/:id').get(getById);
router.route('/create').post(createSession);
router.route('/:id').put(updateSession);
router.route('/:id').delete(deleteSession);

module.exports = router;

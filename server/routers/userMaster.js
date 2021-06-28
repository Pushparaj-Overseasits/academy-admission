const express = require('express');
const {
  signin,
  authenticate,
  createUserMaster,
} = require('../controllers/userMaster.controller');

const router = express.Router();

router.route('/signin').post(signin);
router.route('/auth').get(authenticate);
router.route('/create').post(createUserMaster);

module.exports = router;

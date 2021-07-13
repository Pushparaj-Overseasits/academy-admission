const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserMasterModel = require('../models/admin/userMaster');

const signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await UserMasterModel.findOne({ username });
    if (admin) {
      const isMatch = (admin.password === password);
      const token = await admin.generateAuthToken();
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
        secure: false,
      });
      if (isMatch) {
        res.status(200).json({ message: 'Admin logged in Successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid Credentials!' });
      }
    } else {
      res.status(400).json({ message: 'Invalid Credentials!' });
    }
  } catch (err) {
    console.log(err);
  }
};

/* eslint-disable no-underscore-dangle */
const authenticate = async (req, res) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);
    const adminUser = await UserMasterModel.findOne({ _id: verifyToken._id, 'tokens.token': token });
    if (!adminUser) { throw new Error('User not found!'); }
    res.status(200).json({ message: 'User Authenticated successfully' });
  } catch (err) {
    res.status(401).send('Unauthorized!');
  }
};

const createUserMaster = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    const userMaster = new UserMasterModel(req.body);
    await userMaster.save();
    res.status(200).json({ message: 'Admin registered successfully' });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signin,
  authenticate,
  createUserMaster,
};

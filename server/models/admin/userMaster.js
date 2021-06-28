const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const UserMasterModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    requierd: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  status: {
    type: String,
    requierd: true,
  },
  type: {
    type: String,
    requierd: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// we are generating token
/* eslint-disable */
UserMasterModel.methods.generateAuthToken = async function () {
  try {
    /* eslint-disable no-underscore-dangle */
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = [];
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model('tblusermasters', UserMasterModel);

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
});

module.exports = mongoose.model('tblUserMaster', UserMasterModel);

const mongoose = require('mongoose');

const FeeModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsessions',
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblcourses',
    required: true,
  },
  semId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsemesters',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblfees', FeeModel);

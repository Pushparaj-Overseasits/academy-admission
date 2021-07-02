const mongoose = require('mongoose');

const AdmissionModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
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
  date: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tbladmissions', AdmissionModel);

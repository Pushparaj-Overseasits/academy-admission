const mongoose = require('mongoose');

const CourSessModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
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
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsessions',
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblcoursess', CourSessModel);

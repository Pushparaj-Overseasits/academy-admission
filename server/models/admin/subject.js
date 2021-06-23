const mongoose = require('mongoose');

const SubjectModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  clgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblcolleges',
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
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsubjecttypes',
    required: true,
  },
  masterid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsubjects',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblsubjects', SubjectModel);

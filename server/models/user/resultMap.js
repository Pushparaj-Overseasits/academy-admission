const mongoose = require('mongoose');

const ResMapModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  resultTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblresulttypes',
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
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblresultmaps', ResMapModel);

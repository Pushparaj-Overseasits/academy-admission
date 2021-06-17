const mongoose = require('mongoose');

const ResMapModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  resultTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblResultType',
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSession',
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblCourse',
    required: true,
  },
  semId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSemester',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblResultMap', ResMapModel);

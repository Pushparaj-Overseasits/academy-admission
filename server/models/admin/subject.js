const mongoose = require('mongoose');

const SubjectModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  clgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblCollege',
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
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSubjecttype',
    required: true,
  },
  masterid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSubject',
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

module.exports = mongoose.model('tblSubject', SubjectModel);

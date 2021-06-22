const mongoose = require('mongoose');

const DocMasterModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  docTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tbldocumenttypes',
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

module.exports = mongoose.model('tbldocumentmasters', DocMasterModel);

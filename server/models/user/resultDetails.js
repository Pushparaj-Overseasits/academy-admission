const mongoose = require('mongoose');

const ResDetailModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
    required: true,
  },
  resultTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblresulttypes',
    required: true,
  },
  boardUniversity: {
    type: String,
    required: true,
  },
  seatNo: {
    type: Number,
    required: true,
  },
  Trial: {
    type: Number,
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
  schoolName: {
    type: String,
  },
  totalMarks: {
    type: Number,
  },
  obtainedMarks: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
});

module.exports = mongoose.model('tblresultdetails', ResDetailModel);

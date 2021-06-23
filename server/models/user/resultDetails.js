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
    required: true,
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  obtainedMarks: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('tblresultdetails', ResDetailModel);

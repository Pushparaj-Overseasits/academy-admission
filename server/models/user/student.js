const mongoose = require('mongoose');

const StudentModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  clgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblcolleges',
    required: true,
  },
  enrollmentNo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  bpl: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  adhaar: {
    type: String,
    required: true,
  },
  election: {
    type: String,
    required: true,
  },
  annualIncome: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('tblstudents', StudentModel);

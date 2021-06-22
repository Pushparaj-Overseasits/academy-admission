const mongoose = require('mongoose');

const PersonalModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  grandfatherName: {
    type: String,
    required: true,
  },
  alternative: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  isMarried: {
    type: Boolean,
    required: true,
  },
  motherTongue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblpersonals', PersonalModel);

const mongoose = require('mongoose');

const SubjecsheettModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsubjects',
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblsessions',
    required: true,
  },
  totalsheet: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblsubjectsheets', SubjecsheettModel);

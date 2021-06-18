const mongoose = require('mongoose');

const SubjecsheettModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSubject',
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblSession',
    required: true,
  },
  totalsheet: {
    type: int,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('tblSubjectsheet', SubjecsheettModel);

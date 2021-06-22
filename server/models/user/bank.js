const mongoose = require('mongoose');

const BankModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
    required: true,
  },
  bankAccount: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblbanks', BankModel);

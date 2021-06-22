const mongoose = require('mongoose');

const FeeSubmitModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  addmissionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tbladmissions',
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblfeesubmits', FeeSubmitModel);

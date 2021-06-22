const mongoose = require('mongoose');

const DocumentModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
    required: true,
  },
  docTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tbldocumenttypes',
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tbldocuments', DocumentModel);

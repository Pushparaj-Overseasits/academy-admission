const mongoose = require('mongoose');

const DocumentModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblStudent',
    required: true,
  },
  docTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblDocumentType',
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

module.exports = mongoose.model('tblDocument', DocumentModel);

const mongoose = require('mongoose');

const SubjectTypeModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  clgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblcolleges',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  scode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblsubjecttypes', SubjectTypeModel);

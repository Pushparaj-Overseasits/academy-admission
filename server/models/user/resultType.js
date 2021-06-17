const mongoose = require('mongoose');

const ResTypeModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  clgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblCollege',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tblResultType', ResTypeModel);

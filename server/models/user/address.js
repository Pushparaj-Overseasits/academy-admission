const mongoose = require('mongoose');

const AddressModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblstudents',
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  taluka: {
    type: String,
    required: true,
  },
  addType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('tbladdress', AddressModel);

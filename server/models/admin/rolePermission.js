const mongoose = require('mongoose');

const RolePermModel = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblRole',
    required: true,
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblModule',
    required: true,
  },
  actionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tblAction',
    required: true,
  },
});

module.exports = mongoose.model('tblRolePermission', RolePermModel);

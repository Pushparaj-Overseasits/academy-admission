const mongoose = require('mongoose');
const SessionModel = require('../models/admin/session');

const getAllSession = async (req, res) => {
  try {
    const sessions = await SessionModel.find({});
    res.status(200).send(sessions);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const session = await SessionModel.findById(req.params.id);
    if (!session) {
      res.status(404).send('Session not found!');
    }
    res.status(200).send(session);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSession = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdSession = new SessionModel(req.body);
    await createdSession.save();
    res.status(200).send(createdSession);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const updateSession = async (req, res) => {
  try {
    const session = await SessionModel.findByIdAndUpdate(req.params.id, req.body);
    await session.save();
    res.status(200).send(session);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSession = async (req, res) => {
  try {
    const session = await SessionModel.findByIdAndDelete(req.params.id);
    if (!session) res.status(404).send('No such session found');
    res.status(200).send(session);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllSession,
  getById,
  createSession,
  updateSession,
  deleteSession,
};

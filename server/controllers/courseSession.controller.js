const mongoose = require('mongoose');
const CourSessModel = require('../models/admin/courseAndSesison');

const getAllCourSess = async (req, res) => {
  try {
    const CourSess = await CourSessModel.find({});
    res.status(200).send(CourSess);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const CourSess = await CourSessModel.findById(req.params.id);
    if (!CourSess) {
      res.status(404).send('Course and Session not found!');
    }
    res.status(200).send(CourSess);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourSess = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.courseId = '60d1d097cde1257eae5941eb';
    req.body.semId = '60d1d097cde1257eae5941eb';
    req.body.sessionId = '60d1d097cde1257eae5941eb';
    const createdCourSess = new CourSessModel(req.body);
    await createdCourSess.save();
    res.status(200).send(createdCourSess);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const updateCourSess = async (req, res) => {
  try {
    const CourSess = await CourSessModel.findByIdAndUpdate(req.params.id, req.body);
    await CourSess.save();
    res.status(200).send(CourSess);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCourSess = async (req, res) => {
  try {
    const CourSess = await CourSessModel.findByIdAndDelete(req.params.id);
    if (!CourSess) res.status(404).send('No such course and session found');
    res.status(200).send(CourSess);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllCourSess,
  getById,
  createCourSess,
  updateCourSess,
  deleteCourSess,
};

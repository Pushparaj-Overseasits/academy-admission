const mongoose = require('mongoose');
const SemesterModel = require('../models/admin/semester');

const getAllSemester = async (req, res) => {
  try {
    const semesters = await SemesterModel.find({});
    res.status(200).send(semesters);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const semester = await SemesterModel.findById(req.params.id);
    if (!semester) {
      res.status(404).send('Semester not found!');
    }
    res.status(200).send(semester);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSemester = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdSemester = new SemesterModel(req.body);
    await createdSemester.save();
    res.status(200).send(createdSemester);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const updateSemester = async (req, res) => {
  try {
    const semester = await SemesterModel.findByIdAndUpdate(req.params.id, req.body);
    await semester.save();
    res.status(200).send(semester);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSemester = async (req, res) => {
  try {
    const semester = await SemesterModel.findByIdAndDelete(req.params.id);
    if (!semester) res.status(404).send('No such semester found');
    res.status(200).send(semester);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllSemester,
  getById,
  createSemester,
  updateSemester,
  deleteSemester,
};

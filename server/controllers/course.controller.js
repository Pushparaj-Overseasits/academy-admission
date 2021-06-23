const mongoose = require('mongoose');
const CourseModel = require('../models/admin/course');

const getAllCourse = async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    if (!course) {
      res.status(404).send('Course not found!');
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourse = async (req, res) => {
  try {
    req.body.id = mongoose.Types.ObjectId();
    req.body.clgId = '60d1d097cde1257eae5941eb';
    const createdCourse = new CourseModel(req.body);
    await createdCourse.save();
    res.status(200).send(createdCourse);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await CourseModel.findByIdAndUpdate(req.params.id, req.body);
    await course.save();
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await CourseModel.findByIdAndDelete(req.params.id);
    if (!course) res.status(404).send('No such course found');
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllCourse,
  getById,
  createCourse,
  updateCourse,
  deleteCourse,
};

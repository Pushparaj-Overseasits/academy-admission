const mongoose = require('mongoose');
const CourSessModel = require('../models/admin/courseAndSesison');
const CourseModel = require('../models/admin/course');
const SemesterModel = require('../models/admin/semester');
const SessionModel = require('../models/admin/session');

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
    const {
      _id, id, courseId, semId, sessionId, status, details,
    } = CourSess;
    const CourSessObj = {
      _id,
      id,
      courseId,
      semId,
      sessionId,
      status,
      details,
    };
    const course = await CourseModel.findOne({ id: CourSess.courseId }, 'name', (err, cour) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      console.log(cour);
    });
    CourSessObj.courseId = course.name;
    const semester = await SemesterModel.findOne({ id: CourSess.semId }, 'name', (err, sem) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      console.log(sem);
    });
    CourSessObj.semId = semester.name;
    const session = await SessionModel.findOne({ id: CourSess.sessionId }, 'name', (err, sess) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      console.log(sess);
    });
    CourSessObj.sessionId = session.name;
    res.status(200).send(CourSessObj);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourSess = async (req, res) => {
  try {
    const course = await CourseModel.findOne({ name: req.body.courseId }, 'id', (err, cour) => {
      if (err) {
        console.log(err);
        res.send(500).send(err);
        return;
      }
      console.log(cour);
    });
    const semester = await SemesterModel.findOne({ name: req.body.semId }, 'id', (err, sem) => {
      if (err) {
        console.log(err);
        res.send(500).send(err);
        return;
      }
      console.log(sem);
    });
    const session = await SessionModel.findOne({ name: req.body.sessionId }, 'id', (err, sess) => {
      if (err) {
        console.log(err);
        res.send(500).send(err);
        return;
      }
      console.log(sess);
    });
    req.body.id = mongoose.Types.ObjectId();
    req.body.courseId = course.id;
    req.body.semId = semester.id;
    req.body.sessionId = session.id;
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

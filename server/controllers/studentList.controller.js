const AdmissionModel = require('../models/user/admission');
const StudentModel = require('../models/user/student');
const CourseModel = require('../models/admin/course');
const SessionModel = require('../models/admin/session');

const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await AdmissionModel.find({});
    res.status(200).send(admissions);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

const getById = async (req, res) => {
  try {
    const object = {
      userId: '', name: '', courseId: '', sessionId: '', phone: '',
    };
    const admissions = await AdmissionModel.findById(req.params.id);
    object.userId = admissions.userId;
    const course = await CourseModel.find({ id: admissions.courseId });
    object.courseId = course[0].name;
    const session = await SessionModel.find({ id: admissions.sessionId });
    object.sessionId = session[0].name;
    const students = await StudentModel.find({ id: admissions.userId });
    object.name = students[0].name;
    object.phone = students[0].phone;
    console.log(object);
    res.status(200).send(object);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error: ${error}`);
  }
};

module.exports = {
  getAllAdmissions,
  getById,
};

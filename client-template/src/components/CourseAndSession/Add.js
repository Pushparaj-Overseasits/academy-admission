import React from "react";
import { Modal } from "react-bootstrap";

// components

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false, id: '', courseId: '', semId: '', sessionId: '', status: '', details: '',
      courses: [], semesters: [], sessions: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    this.loadDropdown();
  }

  async loadDropdown() {
    try {
      const resCour = await fetch ('http://localhost:8000/admin/course/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const courses = await resCour.json();
      const resSem = await fetch ('http://localhost:8000/admin/semester/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const semesters = await resSem.json();
      const resSess = await fetch ('http://localhost:8000/admin/session/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const sessions = await resSess.json();
      console.log()
      this.setState({ courses, semesters, sessions });
    } catch (err) {
      console.log(err);
    }
  }

  handleClose() {
    this.setState({ show: false });
  }
  
  handleShow() {
    this.setState({ show: true });
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    console.log(`${name}: ${value}`);
  }

  async createCourseSession() {
    const { courseId, semId, sessionId, status, details } = this.state;
    try {
      const response = await fetch('http://localhost:8000/admin/course-session/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, semId, sessionId, status, details })
      });
      const result = await response.json();
      console.log(result);
      alert('CourseSession Created Successfully!');
      this.setState({ courseId: '', semId: '', sessionId: '', status: '', details: '' });
      this.props.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async loadCourseSession(id) {
    try {
      const response = await fetch(`http://localhost:8000/admin/course-session/direct-load/${id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const result = await response.json();
      const { _id, courseId, semId, sessionId, status, details } = result;
      this.setState({ id: _id, courseId, semId, sessionId, status, details });
      this.props.setEditId(0);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCourseSession() {
    const { id, courseId, semId, sessionId, status, details } = this.state;
    try {
      const response = await fetch(`http://localhost:8000/admin/course-session/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, semId, sessionId, status, details })
      });
      const result = await response.json();
      console.log(result);
      alert('CourseSession Updated Successfully!');
      this.setState({ courseId: '', semId: '', sessionId: '', status: '', details: '' });
      this.props.reload();
    } catch (error) {
      console.log(error);
    }
  }

  handleSave(e) {
    e.preventDefault();
    if (this.props.add === 'create') { 
      this.createCourseSession();
    }
    else {
      this.updateCourseSession();
    }
  }

  render() {
    if (this.props.add === 'edit' && this.props.editId) {
      this.loadCourseSession(this.props.editId);
    }
    const course = this.state.courses.map((course) => (
      <option key={course._id} value={course.id}>{course.name}</option>
    ));
    const semester = this.state.semesters.map((semester) => (
      <option key={semester._id} value={semester.id}>{semester.name}</option>
    ));
    const session = this.state.sessions.map((session) => (
      <option key={session._id} value={session.id}>{session.name}</option>
    ));
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-lightBlue-900  mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-100 text-xl font-bold">Add/Edit Course and Session</h6>
              <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
            onClick={this.handleSave}
          >
            Save
          </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
               
              </h6>
              
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Course
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="courseId"
                      value={this.state.courseId}
                      onChange={this.handleInputChange}
                    >
                      <option value="">---Select Course---</option>
                      {course}
                    </select>
                  </div>
                </div>
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Semester
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="semId"
                      value={this.state.semId}
                      onChange={this.handleInputChange}
                    >
                      <option value="">---Select Semester---</option>
                      {semester}
                    </select>
                  </div>
                </div>
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Session
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="sessionId"
                      value={this.state.sessionId}
                      onChange={this.handleInputChange}
                    >
                      <option value="">---Select Session---</option>
                      {session}
                    </select>
                  </div>
                </div>
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Status
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="status"
                      value={this.state.status}
                      onChange={this.handleInputChange}
                    >
                      <option value="">---Select Status---</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Details
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="details"
                      value={this.state.details}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
               
              </div>
          </form>
          </div>
        </div>
      </>
    );
  }
}

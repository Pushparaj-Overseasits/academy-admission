import React from 'react';
import CourseAdd from 'components/Course/Add.js';
import CourseList from 'components/Course/List.js';

export default class Course extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { add: 'create', editId: 0, courses: [] };
    this.reload = this.reload.bind(this);
    this.setEditId = this.setEditId.bind(this);
  }

  componentDidMount() {
    this.loadCourses();
  }

  reload() {
    this.loadCourses();
    this.setState({ add: 'create' });
  }

  async loadCourses() {
    try {
      const response = await fetch('http://localhost:8000/admin/course/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const result = await response.json();
      this.setState({ courses: result });
    } catch (error) {
      console.log(error);
    }
  }

  setEditId(value) {
    this.setState({ editId: value, add: 'edit' });
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
             {/* This saveId is updating the course state */}
             <CourseList courses={this.state.courses} reload={this.reload} editId={this.setEditId} />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            {/* Even after course state gets updated this CourseAdd does not rerenders */}
            <CourseAdd reload={this.reload} add={this.state.add} editId={this.state.editId} setEditId={this.setEditId} />
          </div>
        </div>
      </>
    );
  }
}
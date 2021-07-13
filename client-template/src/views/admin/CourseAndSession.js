import React from 'react';
import CourseAndSessionAdd from 'components/CourseAndSession/Add.js';
import CourseAndSessionList from 'components/CourseAndSession/List.js';

export default class CourseAndSession extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { add: 'create', editId: 0, courseSessions: [] };
    this.reload = this.reload.bind(this);
    this.setEditId = this.setEditId.bind(this);
  }

  componentDidMount() {
    this.loadCourseSessions();
  }

  reload() {
    this.loadCourseSessions();
    this.setState({ add: 'create' });
  }

  async loadCourseSessions() {
    let result, couSess = [];
    try {
      const response = await fetch('http://localhost:8000/admin/course-session/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      result = await response.json();
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
    try {
      for (let i=0; i<result.length; ++i) {
        const response = await fetch(`http://localhost:8000/admin/course-session/${result[i]._id}`, {
          method: 'GET',
          headers: { "Content-Type": "application/josn" }
        });
        const res = await response.json();
        couSess.push(res);
      }
      this.setState({ courseSessions: couSess });
    } catch(err) {
      console.log(err);
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
            <CourseAndSessionList
              courseSessions={this.state.courseSessions}
              reload={this.reload}
              editId={this.setEditId}
            />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CourseAndSessionAdd
              reload={this.reload}
              add={this.state.add}
              editId={this.state.editId}
              setEditId={this.setEditId}
            />
          </div>
        </div>
      </>
    );
  }
}
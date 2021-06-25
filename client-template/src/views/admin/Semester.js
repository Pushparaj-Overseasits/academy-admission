import React from 'react';
import Semadd from 'components/Semester/Add.js';
import Semlist from 'components/Semester/List.js';

export default class Course extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { add: 'create', editId: 0, semesters: [] };
    this.reload = this.reload.bind(this);
    this.setEditId = this.setEditId.bind(this);
  }

  componentDidMount() {
    this.loadSemesters();
  }

  reload() {
    this.loadSemesters();
    this.setState({ add: 'create' });
  }

  async loadSemesters() {
    try {
      const response = await fetch('http://localhost:8000/admin/semester/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const result = await response.json();
      this.setState({ semesters: result });
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
          <Semlist semesters={this.state.semesters} reload={this.reload} editId={this.setEditId} />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <Semadd reload={this.reload} add={this.state.add} editId={this.state.editId} setEditId={this.setEditId} />
          </div>
        </div>
      </>
    );
  }
}
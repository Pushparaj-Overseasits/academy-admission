import React from 'react';
import SessionAdd from 'components/Session/Add.js';
import SessionList from 'components/Session/List.js';

export default class Session extends React.Component
{
    constructor(props) {
    super(props);
    this.state = { add: 'create', editId: 0, sessions: [] };
    this.reload = this.reload.bind(this);
    this.setEditId = this.setEditId.bind(this);
  }

  componentDidMount() {
    this.loadSessions();
  }

  reload() {
    this.loadSessions();
    this.setState({ add: 'create' });
  }

  async loadSessions() {
    try {
      const response = await fetch('http://localhost:8000/admin/session/all', {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const result = await response.json();
      this.setState({ sessions: result });
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
             <SessionList sessions={this.state.sessions} reload={this.reload} editId={this.setEditId} />
          </div>
          <div className="w-full xl:w-4/12 px-4">
          <SessionAdd reload={this.reload} add={this.state.add} editId={this.state.editId} setEditId={this.setEditId} />
          </div>
        </div>
      </>
    );
  }
}
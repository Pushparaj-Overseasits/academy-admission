import React from "react";

// components

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', status: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  async createSession() {
    const { name, status } = this.state;
    try {
      const response = await fetch('http://localhost:8000/admin/session/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, status: status })
      });
      const result = await response.json();
      console.log(result);
      alert('Session Created Successfully!');
      this.setState({ name: '', status: '' });
      this.props.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async loadSession(id) {
    try {
      const response = await fetch(`http://localhost:8000/admin/session/${id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/josn" }
      });
      const result = await response.json();
      const { _id, name, status } = result;
      this.setState({ id: _id, name, status });
      this.props.setEditId(0);
    } catch (error) {
      console.log(error);
    }
  }

  async updateSession() {
    const { id, name, status } = this.state;
    try {
      const response = await fetch(`http://localhost:8000/admin/session/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, status: status })
      });
      const result = await response.json();
      console.log(result);
      alert('Session Updated Successfully!');
      this.setState({ name: '', status: '' });
      this.props.reload();
    } catch (error) {
      console.log(error);
    }
  }

  handleSave(e) {
    e.preventDefault();
    if (this.props.add === 'create') { 
      this.createSession();
    }
    else {
      this.updateSession();
    }
  }

  render() {
    if (this.props.add === 'edit' && this.props.editId) {
      this.loadSession(this.props.editId);
    }
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-lightBlue-900  mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-100 text-xl font-bold">Add/Edit Session</h6>
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
                {/* <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Course
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                    />
                  </div>
                </div> */}
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
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
               
              </div>
          </form>
          </div>
        </div>
      </>
    );
  }
}

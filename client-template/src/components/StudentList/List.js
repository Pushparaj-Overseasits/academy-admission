import React from "react";
import PropTypes from "prop-types";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: false, admissions: [], details: {} };
    this.onViewClick = this.onViewClick.bind(this);
    this.onCloseView = this.onCloseView.bind(this);
  }

  onCloseView() {
    this.setState({ view: false });
  }

  onViewClick(id) {
    console.log(id);
    this.loadView(id);
    this.setState({ view: true });
  }

  async loadView(id) {
    try {
      const response = await fetch(`http://localhost:8000/admin/student-list/all-details/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });
      const result = await response.json();
      this.setState({ details: result });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.loadAdmissions();
  }

  async loadAdmissions() {
    try {
      const admissions = [];
      const response = await fetch('http://localhost:8000/admin/student-list/all-admissions', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });
      const result = await response.json();
      for (let i=0; i<result.length; ++i) {
        const res = await fetch(`http://localhost:8000/admin/student-list/${result[i]._id}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        });
        const answer = await res.json();
        admissions.push(answer);
      }
      this.setState({ admissions });
      // console.log(admissions);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { color } = this.props;
    const { admissions, details, view } = this.state;
    const list = admissions.map((admission) => (
      <tr key={admission.userId}>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {admission.name}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {admission.courseId}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {admission.sessionId}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {admission.phone}
        </td>
        <td>
          <button
            onClick={() => this.onViewClick(admission.userId)}
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View
          </button>
        </td>
      </tr>
    ));
    return (
      <>
        {view ? null :
        <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center ">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  Student List
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Course
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Session
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Phone
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Aman
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    5th
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    B.A
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    2020-21
                  </td>
                </tr> */}
                {list}
              </tbody>
            </table>
          </div>
        </div>
        </>}
        {/* This is view */}
        {view ? 
        <>
          <button
            onClick={this.onCloseView}
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Close
          </button>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Details
                </h6>
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-2xl font-bold mb-2 text-center"
                      htmlFor="grid-password"
                    >
                      Course Details
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Session : {details.sessionId}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Course : {details.courseId}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Enrollment Number : {details.enrollmentNo}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Student Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Gender : {details.gender}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name : {details.name}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Father Name: {details.fatherName}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mother Name : {details.motherName}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        GrandFather Name : {details.grandfatherName}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Profile Pic : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.profilePic}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Signature Pic : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.signaturePic}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Current Address
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Village : {details.village}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State : {details.currState}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Taluka Name : {details.currTaluka}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Pin Code : {details.currPincode}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number : {details.phone}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Alternative Number : {details.alternative}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Permanent Address
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Address : {details.address}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State : {details.permState}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Taluka Name : {details.permTaluka}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Pin Code : {details.permPincode}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        E-Mail : {details.email}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Personal Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Date Of Birth : {details.dob}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State : {details.permState}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Leave Certificate :
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.leaveCertificate}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Relegious : {details.religion}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Nationality : {details.nationality}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Caste : {details.cast}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Have BPL Card : {details.bpl ? 'Yes' : 'No'}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mother Tongue : {details.motherTongue}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Annual Income : {details.annualIncome}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Bank Account Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Bank A/C Number : {details.bankACNo}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Branch Name : {details.branchName}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Bank Passbook Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.bankPassbook}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Document Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Adhar Card Number : {details.adhaar}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Election Card Name : {details.election}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Adhar Card Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.adharCard}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Election Card Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.electionCard}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        10<sup>th</sup> Exam Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Board / University : {details.boardUniversity10}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Seat Number : {details.seatNo10}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Trail Attempt : {details.trialAttemp10}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        School Name : {details.schoolName10}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Year Of Passing : {details.yearOfPassing10}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Result Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.tenthFile}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        12<sup>th</sup> Exam Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Board / University : {details.boardUniversity12}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Seat Number : {details.seatNo12}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Trail Attempt : {details.trialAttemp12}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        School Name : {details.schoolName12}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Year Of Passing : {details.yearOfPassing12}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Result Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.twelfthFile}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-black text-2xl font-bold mb-2 text-center"
                        htmlFor="grid-password"
                      >
                        Previous Exam Details
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Board / University : {details.boardUniversityClg}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Subject Name : {details.subjectName}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Seat Number : {details.seatNoClg}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Year Of Passing : {details.yearOfPassingClg}
                      </label>
                    </div>
                  </div>
                  <div className="w-full  px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Result Photo : 
                      </label>
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.previousFile}`}
                          alt="Leave Certificate"
                        />
                      </div>
                    </div>
                  </div>
                  {details.affidavitFile === '' ? null : 
                    <div className="w-full  px-6">
                      <div className="relative w-full mb-3">
                        <label
                          className="block text-blueGray-600 text-xl font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Affidavit : 
                        </label>
                        <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src={`http://localhost:8000/uploads/documents/${details.affidavitFile}`}
                          alt="Leave Certificate"
                        />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
        </> : null}
      </>
    );
  }
}

List.defaultProps = {
  color: "light",
};

List.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

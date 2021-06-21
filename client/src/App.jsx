import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// import StudentAdmission from './components/users/StudentAdmission.jsx';
import DashBoard from './components/DashBoard.jsx';

function App() {
  return (
    <div>
      {/* <StudentAdmission /> */}
      <DashBoard />
    </div>
  );
}

const element = <App />;

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}

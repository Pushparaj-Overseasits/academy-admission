import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import StudentAdmission from './components/StudentAdmission.jsx';

function App() {
  return (
    <div>
      {/* <h1>This is Academy Admission</h1> */}
      <StudentAdmission />
    </div>
  );
}

const element = <App />;

ReactDOM.render(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}

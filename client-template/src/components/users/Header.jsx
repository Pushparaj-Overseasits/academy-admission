import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

/* eslint-disable-next-line react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12  ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                  Smt. RM Prajapati Arts 
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                
          <h5>Ambaji Highway, At-Po-Ta-Satlasana, Meshana-384330, Gujarat, India</h5>
          <h5>Contact Us: (02761) 259233, 253540. Mobile: 09426362329</h5>
          <h5>Email: artscollegsatlasana@gmail.com</h5>
                  </p>
                </div>
              </div>
            </div>
          </div>
      
        <div>
         <Card
            style={{
              width: '80%',
              margin: 'auto',
              marginTop: '20px',
              boxShadow: '0px 0px 15px 0px gray',
            }}
          >
            <Card.Header
              style={{
                textAlign: 'center',
                backgroundColor: '#d4edda',
              }}
            >
              NOTICE
            </Card.Header>
            <Card.Body>
              <ol>
                <li>
                  Those students who have passed 12th exam out of Gujarat Higher Secondary board
                  will have to submit provisional Eligibility certificate at the time of
                  admission form.
                </li>
                <li>
                  Those students who have passed out of H.N.G Uni. Patan will have to submit
                  provisional Eligibility certificate at the time of admission form.
                  And also submit the migration certificate.
                </li>
                <li>
                  Student have to submit self-attested marksheet of last year, Leaving
                  Certificate and Trial Certificate.
                </li>
                <li>
                  No Objectioni Certificate is must for those who have changed their college.
                </li>
                <li>
                  OBC Students have to submit the original certificate of District Welfare Officer.
                </li>
                <li>
                  Every student must keep their I-card and semester fee receipt with them,
                  otherwise they will not given entry in the class room.
                </li>
                <li>
                  Students will have to submit scholarship form to the office with all details.
                </li>
                <li>
                  Students will have to read all the instruction put on the Notice Board from
                  time to time and have to follow these rules.
                </li>
                <li>
                  Those students who deserve the scholarship have to write their Bank account number
                  and name of the bank in the scholarship form at the time of submission.
                </li>
                <li>
                  Students have to submit Assignment/Book Review/Seminar/Viva to the
                  concerned subject faculty.
                </li>
                <li>
                  Students of B.A Semester 1 have to submit 12th marksheet with all
                  attempts at the time of Enrollment form and if there is any gape,
                  they will submit affidavit certificate.
                </li>
                <li>
                  Students have to participate compulsory in any of the dharas.
                </li>
              </ol>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Header;

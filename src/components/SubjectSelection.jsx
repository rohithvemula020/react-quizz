import React from 'react';
import './SubjectSelection.css'

const subjects = ['JavaScript', 'Python', 'React', 'SQL'];

const SubjectSelection = ({ selectSubject }) => {
  return (
    <div className="subject-selection-container">
  <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-black">
    <div className="row">
      {subjects.map((subject, index) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center"
          key={subject}
          onClick={() => selectSubject(subject)}
        >
          <div className="card">
            <div className="text">
              <span>{subject}</span>
            </div>
            <div className="icons">
              <a className="btn" href="#">
                Take Quiz
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default SubjectSelection;

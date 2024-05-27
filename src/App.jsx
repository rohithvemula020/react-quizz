import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SubjectSelection from './components/SubjectSelection';
import Quiz from './components/Quiz';

const App = () => {
  const [stage, setStage] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);

  const startQuiz = () => setStage('select-subject');
  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    setStage('quiz');
  };

  return (
    <div>
      {stage === 'home' && <HomePage startQuiz={startQuiz} />}
      {stage === 'select-subject' && <SubjectSelection selectSubject={selectSubject} />}
      {stage === 'quiz' && selectedSubject && 
        <Quiz subject={selectedSubject} setStage={setStage} />
      }
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { questions } from '../data/questions';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css';

const Quiz = ({ subject, setStage }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answers, setAnswers] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(questions[subject][difficulty]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          if (!selectedOption) {
            toast.info('Time up for this question!', { autoClose: 3000 });
          }
          nextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, filteredQuestions, selectedOption]);

  useEffect(() => {
    setFilteredQuestions(questions[subject][difficulty]);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(10);
  }, [difficulty, subject]);

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(10);
    } else {
      displayResults();
    }
    setSelectedOption(null); // Reset the selected option
  };

  const handleAnswer = (answer) => {
    setAnswers(prevAnswers => [...prevAnswers, { question: filteredQuestions[currentQuestion].question, answer, isCorrect: answer === filteredQuestions[currentQuestion].correctAnswer }]);
    nextQuestion();
  };

  const displayResults = () => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    const score = (correctAnswers / answers.length) * 100;

    Swal.fire({
      title: 'Quiz Completed!',
      text: `You scored ${score.toFixed(2)}%! You answered ${correctAnswers} out of ${answers.length} questions correctly.`,
      icon: 'success'
    }).then(() => {
      setStage('home');
    });
  };

  return (
    <div className="container main-card mt-5">
      <h3 className='text-danger text-center '>ASSESSMENT</h3>
      <ToastContainer />
      <div className="mb-4">
        <label htmlFor="difficulty-select" className="form-label ">Select Difficulty:</label>
        <select 
          id="difficulty-select" 
          className="form-select center w-25  bg-light" 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="card-quiz">
        <div className="card-body-quiz">
          <h5 className="card-title-quiz text-danger">{filteredQuestions[currentQuestion].question}</h5>
          <div className="options-container">
            {filteredQuestions[currentQuestion].options.map(option => (
              <input 
                type="button"
                className={`option-button ${selectedOption === option ? 'selected' : ''}`} 
                key={option} 
                value={option}
                onClick={() => {
                  setSelectedOption(option);
                  handleAnswer(option);
                }}
              />
            ))}
          </div>
          <div className="mt-3">Time left: {timeLeft} seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

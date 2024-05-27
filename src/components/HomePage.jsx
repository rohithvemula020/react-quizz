import React from 'react';
import { motion } from 'framer-motion';


const HomePage = ({ startQuiz }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{ backgroundColor: 'lavender' }}
    >
      <h1 className='text-danger fs-1'>Welcome to the Quiz</h1>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="btn btn-primary mt-4" 
        onClick={startQuiz}
      >
        Start Quiz
      </motion.button>
    </motion.div>
  );
};

export default HomePage;



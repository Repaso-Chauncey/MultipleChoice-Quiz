import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-box">
      <h3>{question.questionText}</h3>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

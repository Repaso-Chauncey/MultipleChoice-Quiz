import React from 'react';

const Result = ({ score, total, onRetry }) => {
  const percentage = ((score / total) * 100).toFixed(2);
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Correct Answers: {score} / {total}</p>
      <p>Percentage: {percentage}%</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
};

export default Result;

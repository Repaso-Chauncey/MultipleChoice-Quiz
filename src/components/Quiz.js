import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    questionText: "What is the capital of the Philippines?",
    options: ["Cebu", "Davao", "Manila", "Quezon City"],
    answer: "Manila",
  },
  {
    questionText: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "None"],
    answer: "HyperText Markup Language",
  },
  {
    questionText: "Which company developed React?",
    options: ["Google", "Facebook", "Amazon", "Microsoft"],
    answer: "Facebook",
  },
  {
    questionText: "What is the output of 2 + '2' in JS?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
  },
  {
    questionText: "Which hook is used for state in React?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    answer: "useState",
  },
];

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {!showResult ? (
        <Question
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          total={questions.length}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default Quiz;

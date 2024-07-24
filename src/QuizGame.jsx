// QuizGame.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizGame = ({ apiUrl }) => {
  const [questions, setQuestions] = useState([
    { question: "What is 1+1?", answer: "2" },
    { question: "What is 2+2?", answer: "4" },
    { question: "What is 3+3?", answer: "6" },
    { question: "What is 4+4?", answer: "8" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await axios.get(apiUrl);
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.error("Error fetching quiz questions:", error);
  //     }
  //   };

  //   fetchQuestions();
  // }, [apiUrl]);

  const nextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div>
        <strong>Q:</strong> {currentQuestion.question}
      </div>
      {showAnswer && (
        <div>
          <strong>A:</strong> {currentQuestion.answer}
        </div>
      )}
      <button onClick={() => setShowAnswer(true)}>Show Answer</button>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};

export default QuizGame;

// FlashcardGame.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const FlashcardGame = ({ apiUrl }) => {
  const [flashcards, setFlashcards] = useState([
    { question: "What is 1+1?", answer: "2" },
    { question: "What is 2+2?", answer: "4" },
    { question: "What is 3+3?", answer: "6" },
    { question: "What is 4+4?", answer: "8" },
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  //   useEffect(() => {
  //     const fetchFlashcards = async () => {
  //       try {
  //         const response = await axios.get(apiUrl);
  //         setFlashcards(response.data);
  //       } catch (error) {
  //         console.error("Error fetching flashcards:", error);
  //       }
  //     };

  //     fetchFlashcards();
  //   }, [apiUrl]);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  if (flashcards.length === 0) {
    return <div>Loading flashcards...</div>;
  }

  const currentCard = flashcards[currentCardIndex];

  return (
    <div>
      <div>
        <strong>Q:</strong> {currentCard.question}
      </div>
      <div>
        <strong>A:</strong> {currentCard.answer}
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default FlashcardGame;

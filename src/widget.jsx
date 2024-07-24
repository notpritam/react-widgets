import React from "react";
import ReactDOM from "react-dom";
import FlashcardGame from "./FlashcardGame";
import QuizGame from "./QuizGame";

const renderGame = (gameType, elementId, apiUrl) => {
  let Component;
  switch (gameType) {
    case "flashcard":
      Component = FlashcardGame;
      break;
    case "quiz":
      Component = QuizGame;
      break;
    default:
      throw new Error(`Unknown game type: ${gameType}`);
  }

  ReactDOM.createRoot(document.getElementById(elementId)).render(
    <React.StrictMode>
      <Component apiUrl={apiUrl} />
    </React.StrictMode>
  );
};

window.renderGame = renderGame;

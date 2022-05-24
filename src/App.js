import { useState } from "react";
import './App.css';
import questions from "./assets/questions";
import Quiz from "./components/Quiz";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const currentQuestion = questions[questionIndex];

  const selectOption = (index) => {
    if (currentQuestion.answer === index) {
      setScore(score + 1);
    }
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowScore(true);
    }
  };
const reset = () => {
  setQuestionIndex(0);
  setScore(0);
  setShowScore(false);

};
  return (
    <div className = "quiz-container">
      {showScore ? (
        <>
       <h1>Your Score is : {score}</h1> 
       <button onClick = {reset}>Restart</button>
       </>
       ) : (
        <div className = "quiz-container__question">
        <p> {currentQuestion.question} </p>
        <div className = "quiz-container__options">
          <ul className = "quiz-container__ul">
            {currentQuestion.options.map(option, i) => {
              return (
                 <li
                  className = "quiz-container__li" 
                 onClick={() => selectOption (i)}
                 >
                   {option}
                 </li>
              );
            })}
            </ul>
      </div>
    </div>
    </div>
  );
}

export default App;

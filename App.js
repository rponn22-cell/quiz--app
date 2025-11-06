import React, { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "None of these"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "What is React primarily used for?",
    options: ["Database", "User Interface", "Server", "API"],
    answer: "User Interface"
  },
  {
    question: "Which hook is used for managing state in React?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useState"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>React Quiz App</h1>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              style={{ margin: 5, padding: 10 }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

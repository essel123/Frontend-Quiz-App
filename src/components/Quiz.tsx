import Data from "../assets/data.json";

import { useState } from "react";
import QuizCompleted from "./QuizCompleted";

interface props {
  index: number;
}

function Quiz({ index }: props) {
  // eslint-disable-next-line prefer-const
  let [currentIndex, setcurrentIndex] = useState(0);
  const error = document.getElementById("error-message");
  const [clicked, setclicked] = useState(false);
  // eslint-disable-next-line prefer-const
  let [next, setnext] = useState(false);
  // eslint-disable-next-line prefer-const
  let [selectedindex, setSlectedindex] = useState(-1);
  const [quicompleted, setquicompleted] = useState(false);

  function setquiz() {
    // eslint-disable-next-line prefer-const, react-hooks/rules-of-hooks
    let [answer, showanwser] = useState(false);
    const quiz = Data.quizzes.map((quiz, id) => {
      if (id === index) {
        return  quicompleted?   <QuizCompleted img={quiz.icon} title= {quiz.title} score={10} /> :quiz.questions.map((questions, id_) => {
            if (currentIndex === id_) {
              return (
                <div className="quiz-content" key={id}>
                  <div className="left">
                    <p>
                      Question {currentIndex + 1} out of 10
                    </p>
                    <div className="question">
                      <p>
                        {questions.question}
                      </p>
                      <div className="progress">
                        <input type="range" />
                      </div>
                    </div>
                  </div>
  
                  <div className="right">
                    <div className="options">
                      <ul>
                        {questions.options.map((option, id) => {
                          return (
                            <li
                              className="options"
                              key={id}
                              onClick={() => {
                                setclicked(true);
                                if (error) {
                                  error.style.display = "none";
                                }
                                selectedindex = id;
                                setSlectedindex(selectedindex);
                              }}
                              style={{
                                border: `${selectedindex === id
                                  ? answer
                                    ? questions.answer.trim() === option.trim()
                                      ? "2px solid green"
                                      : "2px solid red"
                                    : `${clicked ? "2px solid #A729F5" : ""}`
                                  : ""}`
                              }}
                            >
                              <div className="opt">
                                <div
                                  className="alternatives"
                                  style={{
                                    background: `${selectedindex === id
                                      ? answer
                                        ? questions.answer.trim() ===
                                          option.trim()
                                          ? "green"
                                          : "red"
                                        : `${clicked ? "#A729F5" : ""}`
                                      : ""}`,
  
                                    color: `${selectedindex === id
                                      ? clicked ? "white" : "white"
                                      : ""}`
                                  }}
                                >
                                  {id === 0
                                    ? "A"
                                    : id === 1 ? "B" : id === 2 ? "C" : "D"}
                                </div>
                                <p>
                                  {" "}{option}
                                </p>
                              </div>
                              {questions.answer.trim() === option.trim()
                                ? answer
                                  ? <img
                                      className="answer-check"
                                      src={"./images/icon-correct.svg"}
                                      alt=""
                                    />
                                  : ""
                                : ""}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
  
                    <div className="buttons">
                      {next
                        ? <button
                            onClick={() => {
                              setnext(false);
                              showanwser(false);
  
                              currentIndex++;
  
                              setcurrentIndex(currentIndex);
  
                              if (currentIndex === 9) {
                                setquicompleted(true);
                              }
                            }}
                          >
                            Next
                          </button>
                        : <button
                            onClick={() => {
                              setnext(true);
                              showanwser(true);
                              setclicked(false);
                            }}
                          >
                            Submit Answer
                          </button>}
  
                      <div id="error-message" className="error-message">
                        <img src="./images/icon-error.svg" alt="" />
                        <p>Please select an answer</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          });
      }
    });

    return quiz;
  }

  return (
    <div>
       {" "}{setquiz()}
     
    </div>
  );
}

export default Quiz;

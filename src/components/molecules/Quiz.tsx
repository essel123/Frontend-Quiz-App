import Data from "../../assets/data.json";

import { useState } from "react";
import QuizCompleted from "./QuizCompleted";
import QuizName from "../atoms/QuizName/Quiz-Name";
import Button from "../atoms/Button/Button";
import { ErrorMessage } from "../atoms/Error-message/Error-Message";
import { usePersistedState } from '../atoms/Functions'

interface props {
  index: number;

}

function Quiz({ index }: props) {

  const [hasClicked, setHasClicked] = usePersistedState('hasClicked', false);
  const [isNext, setIsNext] = usePersistedState('isNext', false);
  
  const [selectedIndex, setSelectedIndex] = usePersistedState('selectedIndex', -1);
  const [hasError, setHasError] = useState(false);
  const [currentIndex, setCurrentIndex] = usePersistedState('currentIndex', 0);
  const [progressPercentage, setProgressPercentage] = usePersistedState('progressPercentage', 10);
  const [isQuizCompleted, setIsQuizCompleted] = usePersistedState('isQuizCompleted', false);
  const [currentScore, setCurrentScore] = usePersistedState('currentScore', 0);



  function setquiz() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [answer, showAnswer] = usePersistedState('answer', false);
    const quiz = Data.quizzes.map((quiz, id) => {
      if (id === index) {
        return isQuizCompleted
          ? <QuizCompleted img={quiz.icon} title={quiz.title} totalNumberOfQuestions={quiz.questions.length} score={currentScore} />
          : quiz.questions.map((questions, id_) => {
            if (currentIndex === id_) {
              return (
                <>
                  <div className="re-position">
                    <QuizName quizicon={quiz.icon} quiztitle={quiz.title} />
                  </div>
                  <div className="quiz-content" key={id}>

                    <div className="left">
                      <p>
                        Question {currentIndex + 1} out of {quiz.questions.length}
                      </p>
                      <div className="question">
                        <p>
                          {questions.question}
                        </p>
                        <div className="progress">
                          <div className="progress-bar" style={
                            {
                              width: `${progressPercentage}%`

                            }
                          }></div>
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
                                  setHasClicked(true);
                                 ;
                                  setSelectedIndex(id);
                                  setHasError(false);
                                  if (selectedIndex === id) {
                                    if (
                                      questions.answer.trim() === option.trim()
                                    ) {

                                      setCurrentScore(currentScore + 1);
                                    }
                                  }
                                }}
                                style={{
                                  border: `${selectedIndex === id
                                    ? answer
                                      ? questions.answer.trim() ===
                                        option.trim()
                                        ? "2px solid green"
                                        : "2px solid red"
                                      : `${hasClicked ? "2px solid #A729F5" : ""}`
                                    : ""}`,

                                  cursor: "pointer",

                                  pointerEvents: isNext ? "none" : "auto"
                                }}
                              >
                                <div className="opt">
                                  <div
                                    className="alternatives"
                                    style={{
                                      background: `${selectedIndex === id
                                        ? answer
                                          ? questions.answer.trim() ===
                                            option.trim()
                                            ? "#26D782"
                                            : "red"
                                          : `${hasClicked ? "#A729F5" : ""}`
                                        : ""}`,

                                      color: ` ${selectedIndex === id
                                        ? hasClicked
                                          ? "white"
                                          : questions.answer.trim() ===
                                            option.trim()
                                            ? "white"
                                            : ""
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
                              </li>)
                          })}
                        </ul>
                      </div>

                      <div className="buttons">
                        {isNext
                          ? <Button buttonText={`${currentIndex === 9 ? "Finish" : "Next Question"}`} onclick={() => {
                            setIsNext(false);
                            showAnswer(false);
                            setSelectedIndex(-1);
                            setProgressPercentage(progressPercentage + 10);
                            setCurrentIndex(currentIndex + 1);
                            if (currentIndex === 9) {
                              setIsQuizCompleted(true);


                            }
                          }}

                          />
                          : <Button buttonText="Submit Answer" onclick={() => {
                            if (selectedIndex < 0) {
                              setHasError(true);
                            } else {
                              setIsNext(true);
                              showAnswer(true);
                              setHasClicked(false);
                            }
                          }} />}

                        {hasError
                          ? <ErrorMessage />
                          : ""}
                      </div>
                    </div>
                  </div>
                </>
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


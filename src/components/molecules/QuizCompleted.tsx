import QuizName from "../atoms/QuizName/Quiz-Name";
import Button from "../atoms/Button/Button";
import { useState } from "react";
import Home from "./Home/Home";

type props = {
  score: number;
  img: string;
  title: string;
  totalNumberOfQuestions: number;
};

function QuizCompleted({ score, img, title, totalNumberOfQuestions }: props) {
  const [play, setplay] = useState(true);

  const handleclick = () => {
    localStorage.setItem("quizIndex", JSON.stringify(-1));
    localStorage.setItem("startquiz", JSON.stringify(false));
    localStorage.setItem("currentIndex", JSON.stringify(0));
    localStorage.setItem("isQuizCompleted", JSON.stringify(false));
    localStorage.setItem("score", JSON.stringify(0));
    localStorage.setItem("progressPercentage", JSON.stringify(10));
    setplay(false);
  };
  return (
    <div>
      {play
        ? <div>
            <div className="re-position">
              <QuizName quizicon={img} quiztitle={title} />
            </div>

            <div className="completed">
              <div className="left">
                <h6 className="welcome">Quiz completed</h6>
                <h5 className="title">You scored...</h5>
              </div>
              <div className="right">
                <div className="container">
                  <QuizName quizicon={img} quiztitle={title} />
                  <div className="score">
                    <h1>
                      {score}
                    </h1>
                  </div>
                  <p>
                    out of {totalNumberOfQuestions}
                  </p>
                </div>
                <Button buttonText="Play Again" onclick={() => handleclick()} />
              </div>
            </div>
          </div>
        : <Home />}
    </div>
  );
}

export default QuizCompleted;

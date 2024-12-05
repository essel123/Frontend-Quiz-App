import QuizName from "../atoms/Quiz-Name";
import Button from "../atoms/Button";
import { useState } from "react";
import Home from "./Home";

type props = {
  score: number;
  img: string;
  title: string;
};

function QuizCompleted({ score, img, title }: props) {
  const [play, setplay] = useState(true);
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

                  <p>out of 10</p>
                </div>

                <Button
                  buttonText="Play Again"
                  onclick={() => {
                    localStorage.setItem("quizIndex", JSON.stringify(-1));
                    localStorage.setItem("startquiz", JSON.stringify(false));
                    localStorage.setItem("currentIndex", JSON.stringify(0));
                    localStorage.setItem(
                      "isQuizCompleted",
                      JSON.stringify(false)
                    );
                    localStorage.setItem("score", JSON.stringify(0));
                    localStorage.setItem(
                      "progressPercentage",
                      JSON.stringify(10)
                    );
                    setplay(false);
                  }}
                />
              </div>
            </div>
          </div>
        : <Home />}
    </div>
  );
}

export default QuizCompleted;

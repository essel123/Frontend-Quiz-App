import { useState } from "react";
import Home from "./Home";
import QuizName from "../atoms/Quiz-Name";
import Button from "../atoms/Button";

type props = {
  score: number;
  img: string;
  title: string;
};

function QuizCompleted({ score, img, title }: props) {
  const [play, setplay] = useState(true);

  return (
    <div>
      {play ?
        <div>
         <div className="re-position">
         <QuizName img={img} quiz={title} />
         </div>

          <div className="completed">
          <div className="left">
            <h6 className="welcome">Quiz completed</h6>
            <h5 className="title">You scored...</h5>
          </div>
          <div className="right">
            <div className="container">
              {/* <div className="quiztype_">
                <img src={img} alt="alt" />
                <p>
                  {title}
                </p>
              </div> */}
                 <QuizName img={img} quiz={title} />
              <div className="score">
                <h1>
                  {score}
                </h1>
              </div>

              <p>out of 10</p>
            </div>

            <Button buttonText="Play Again" onclick={()=>{
               setplay(false);
               localStorage.setItem('quizIndex',JSON.stringify(-1));
               localStorage.setItem('startquiz',JSON.stringify(false))
            }} />
          </div>
        </div>
        </div>:<Home/>}
    </div>
  );
}

export default QuizCompleted;

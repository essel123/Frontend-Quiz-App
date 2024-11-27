import Data from "../assets/data.json";
import { useState } from "react";
import Quiz from '../components/Quiz'
import Mode from "./Mode";

function Home() {
    const [startquiz, setstartquiz] = useState(false);
    const [quizIndex, setquizIndex] = useState(-1);
    const [img, setimg] = useState('');
    const [title, settitle] = useState('')
   
  function selectQuiz(index: number) {
   setstartquiz(!startquiz)
    setquizIndex(index)
  }

  const quizType = Data.quizzes.map((data, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          selectQuiz(index);
          setimg(data.icon)
          settitle(data.title)

        }}
      >
        

        <span style={{
            background:
              index === 0
                ? "#FFF1E9"
                : index === 1 ? "#E0FDEF" : index === 2 ? "#EBF0FF" : "#F6E7FF"
          }}>
            <img
          src={data.icon}
          alt="alt"
          
        />
        </span>
        <p>
          {" "}{data.title}
        </p>
      </li>
    );
  });
  return (

   <>
    <Mode img= {img} quiz= {title} hide = {startquiz} />
   {
     startquiz? <Quiz index={quizIndex} /> :<div className="home-page">
     <div className="left">
       <h6 className="welcome">Welcome to the</h6>
       <h5 className="title">Frontend Quiz!</h5>
       <p>Pick a subject to get started.</p>
     </div>
     <div className="right">
       <ul>
         {quizType}
       </ul>
     </div>
   </div>
   }
  </>
    
  );
}

export default Home;

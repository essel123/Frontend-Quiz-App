import Data from "../../assets/data.json";
import { useEffect, useState } from "react";
import Quiz from './Quiz'


// type props = {
//     show: boolean;
// }



function Home() {
  const [startquiz, setStartQuiz] = useState(() => {
    const storedState = localStorage.getItem('startquiz');
    return storedState ? JSON.parse(storedState) : false; // default to false if no value in localStorage
  });

  const [quizIndex, setQuizIndex] = useState(() => {
    const storedIndex = localStorage.getItem('quizIndex');
    return storedIndex ? JSON.parse(storedIndex) : -1; // default to -1 if no value in localStorage
  });

 
    useEffect(() => {
      localStorage.setItem('startquiz', JSON.stringify(startquiz));
      localStorage.setItem('quizIndex', JSON.stringify(quizIndex));
    }, [startquiz,quizIndex]);
  

  function selectQuiz(index: number) {
    setStartQuiz(!startquiz)
    setQuizIndex(index)
  }

  const quizType = Data.quizzes.map((data, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          selectQuiz(index);
         
        
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
     
   {
     startquiz? <Quiz index={quizIndex} /> : <div className="home-page">
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

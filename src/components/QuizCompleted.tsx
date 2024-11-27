

type  props = {
  score: number,
  img : string,
  title: string;
}

function QuizCompleted({score,img,title}:props) {
  return (
    <div>

      <div className="completed">
      <div className="left">
       <h6 className="welcome">Quiz completed</h6>
       <h5 className="title">You scored...</h5>
     </div>
        <div className="right">
           <div className="container">
               <div>
                <img src= {img} alt="alt" />
                <p>{title}</p>
               </div>

               <div className="score">
                  <h1>{score}</h1>
               </div>

                <p>out of 10</p>
           </div>

          <button>Play Again</button>
        </div>
      </div>
      
    </div>
  )
}

export default QuizCompleted

interface props {
  quizicon: string;
  quiztitle: string;
}
function QuizName({ quizicon, quiztitle }: props) {
  return (
    <div className="quiztype">
      <img src={quizicon} alt="" />
      <p>
        {quiztitle}
      </p>
    </div>
  );
}

export default QuizName;


// // Define interfaces for the props
// interface Question {
//   answer: string;
// }

// interface OptionProps {
//   id: number;
//   option: string;
//   questions: Question;
//   selectedIndex: number;
//   setSelectedIndex: (index: number) => void;
//   setHasClicked: (clicked: boolean) => void;
//   hasClicked: boolean;
//   setCurrentScore: (score: number) => void;
//   handleClick: ()=>void;
//   currentScore: number;
//   isNext: boolean;
//   optionBorder:string,
//   optionBackground:string,
//   optionTextColor:string,
// }

// const OptionButton: React.FC<OptionProps> = ({
//   id,
//   option,
//   questions,
//   selectedIndex,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   setSelectedIndex,
//   setHasClicked,
//   hasClicked,
//   setCurrentScore,
//   currentScore,
//   handleClick,
//   optionBackground,
//   optionBorder,
//   optionTextColor,
//   isNext
// }) => {
//   // Handle the click event
  

//   return (
//     <li
//     key={id}
//       className="options"
//       onClick={handleClick}
//       style={{
//         border: optionBorder,
//         cursor: 'pointer',
//         pointerEvents: isNext ? 'none' : 'auto'
//       }}
//     >
//       <div className="opt">
//         <div
//           className="alternatives"
//           style={{
//             background: optionBackground,
//             color: optionTextColor
//           }}
//         >
//           {id === 0 ? 'A' : id === 1 ? 'B' : id === 2 ? 'C' : 'D'}
//         </div>
//         <p>{option}</p>
//       </div>
//       {questions.answer.trim() === option.trim() && !hasClicked && (
//         <img className="answer-check" src="./images/icon-correct.svg" alt="Correct answer" />
//       )}
//     </li>
//   );
// };

// export default OptionButton;

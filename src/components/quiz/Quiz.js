import React from "react";
import Options from "../../components/options/Options";
import swal from "sweetalert";

const Quiz = ({ qus }) => {
  const { options, question, correctAnswer } = qus;
  //showing correct answer
  const correct = () => {
    swal("Correct answer is..", `${correctAnswer}`);
  };
  //detecting wrong or correct answer
  const handleAnswer = (eachOption) => {
    if (eachOption === correctAnswer) {
      swal("Correct answer", "You clicked right answer..😍", "success");
    } else {
      swal("Wrong answer", "You clicked wrong answer..😥", "warning");
    }
  };
  return (
    <div className="shadow-lg container p-4 rounded-5 my-5 bg-dark">
      <div className="d-flex justify-content-between ">
        <h5 className="text-warning">
          <span className="text-warning">Qus: </span>
          {question}
        </h5>
        <h5 onClick={correct} className="text-warning fs-3">
          <i class="fa-solid fa-unlock"></i>
        </h5>
      </div>
      {options.map((option) => (
        <Options handleAnswer={handleAnswer} eachOption={option}></Options>
      ))}
    </div>
  );
};

export default Quiz;

import React from "react";
import Options from "../../components/options/Options";

const Quiz = ({ qus }) => {
  const { options, question } = qus;
  return (
    <div className="shadow-lg container p-3 rounded-5 my-5 bg-dark">
      <h5 className="text-white">
        <span className="text-warning">Qus: </span>
        {question}
      </h5>
      {options.map((option) => (
        <Options eachOption={option}></Options>
      ))}
      <h5>{options.length}</h5>
    </div>
  );
};

export default Quiz;

import React from "react";

const Options = ({ eachOption, handleAnswer }) => {
  // console.log(eachOption);
  return (
    <div
      onClick={() => handleAnswer(eachOption)}
      className="form-check my-3 p-3 border  rounded"
    >
      <input
        className="form-check-input ms-1"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label
        className="form-check-label text-white ms-1"
        for="flexRadioDefault1"
      >
        {eachOption}
      </label>
    </div>
  );
};

export default Options;

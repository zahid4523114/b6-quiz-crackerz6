import React from "react";

const Options = ({ eachOption }) => {
  console.log(eachOption);
  return (
    <div class="form-check my-3 p-3 rounded">
      <input
        class="form-check-input ms-1"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label text-white ms-1" for="flexRadioDefault1">
        {eachOption}
      </label>
    </div>
  );
};

export default Options;

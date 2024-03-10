import React from "react";
import InputMask from "react-input-mask";

function DateInputMask() {
  return (
    <div>
      <label htmlFor="date">Date:</label>
      <InputMask
        id="date"
        mask="99/99/9999" // Set the mask for date input
        placeholder="DD/MM/YYYY"
        maskChar=" "
      />
    </div>
  );
}

export default DateInputMask;

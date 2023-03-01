import React from "react";
import MyNumberInput from "./MyNumberInput";
import "../style/EstimationDuration.css";

const EstimationDuration = () => (
  <div className="parentOfNumberInputs">
    <MyNumberInput
      className="daysEstimation"
      data={{ defaultValue: 0, min: 0, label: "days" }}
    />
    <MyNumberInput
      className="hoursEstimation"
      data={{ defaultValue: 0, min: 0, label: "hours" }}
    />
    <MyNumberInput
      className="minEstimation"
      data={{ defaultValue: 0, min: 0, label: "min" }}
    />
  </div>
);

export default EstimationDuration;

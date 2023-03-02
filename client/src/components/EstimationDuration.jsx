import React from "react";
import MyNumberInput from "./MyNumberInput";
import "../style/EstimationDuration.css";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../TaskStore";

const EstimationDuration = () => {
  const [taskDetails] = useAtom(ADD_TASK_DETAILS);
  return (
    <div className="parentOfNumberInputs">
      <MyNumberInput
        className="daysEstimation"
        data={{
          defaultValue: taskDetails.estimatedDays,
          min: 0,
          label: "days",
        }}
      />
      <MyNumberInput
        className="hoursEstimation"
        data={{
          defaultValue: taskDetails.estimatedHours,
          min: 0,
          label: "hours",
        }}
      />
      <MyNumberInput
        className="minEstimation"
        data={{ defaultValue: taskDetails.estimatedMin, min: 0, label: "min" }}
      />
    </div>
  );
};

export default EstimationDuration;

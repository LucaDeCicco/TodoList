import React from "react";
import "../style/NumberInput.css";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../util/TaskStore";

const MyNumberInput = ({ data }) => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

  const handleInputChange = (value) => {
    const types = {
      days: "estimatedDays",
      hours: "estimatedHours",
      min: "estimatedMin",
    };
    taskDetails[types[data.label]] = value;
    setTaskDetails(taskDetails);
  };

  return (
    <FormControl className="numberInput">
      <FormLabel>{data.label}</FormLabel>
      <NumberInput
        defaultValue={data.defaultValue}
        min={data.min}
        onChange={handleInputChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default MyNumberInput;

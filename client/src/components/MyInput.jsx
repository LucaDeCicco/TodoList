import React from "react";
import { Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../TaskStore";
import "../style/MyInput.css";

const MyInput = ({ data }) => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

  const handleInputChange = (event) => {
    taskDetails.name = event.target.value;
    setTaskDetails(taskDetails);
  };

  return (
    <Input
      className={"nameOfTaskInput"}
      placeholder={data}
      onChange={handleInputChange}
    />
  );
};

export default MyInput;

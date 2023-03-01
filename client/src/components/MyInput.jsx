import React from "react";
import { Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../util/TaskStore";

const MyInput = ({ data }) => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

  const handleInputChange = (event) => {
    taskDetails.name = event.target.value;
    setTaskDetails(taskDetails);
  };

  return (
    <div>
      <Input placeholder={data} onChange={handleInputChange} />
    </div>
  );
};

export default MyInput;

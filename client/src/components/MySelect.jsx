import React, { useState } from "react";
import { Select, ChakraProvider } from "@chakra-ui/react";
import { ADD_TASK_DETAILS } from "../TaskStore";
import { useAtom } from "jotai";
import "../style/MySelect.css";

const MySelect = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    taskDetails.taskType = event.target.value;
    setTaskDetails(taskDetails);
  };

  return (
    <ChakraProvider>
      <Select
        placeholder="Select option"
        value={taskDetails ? taskDetails.taskType : selectedOption}
        onChange={handleSelectChange}
        className={"simpleSelect"}
      >
        {data?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </ChakraProvider>
  );
};

export default MySelect;

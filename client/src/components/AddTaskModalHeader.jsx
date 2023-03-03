import React from "react";
import { ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../TaskStore";

const AddTaskModalHeader = ({ data }) => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);
  const handleCloseModal = () => {
    taskDetails.name = "";
    setTaskDetails(taskDetails);
  };
  return (
    <div>
      <ModalHeader>{data}</ModalHeader>
      <ModalCloseButton onClick={handleCloseModal} />
    </div>
  );
};

export default AddTaskModalHeader;

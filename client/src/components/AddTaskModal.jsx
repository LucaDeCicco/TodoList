import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { postTask } from "../service/TaskService";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS, FALSE_RELOAD } from "../TaskStore";
import AddTaskModalHeader from "./AddTaskModalHeader";
import AddTaskModalFooter from "./AddTaskModalFooter";
import AddTaskModalBody from "./AddTaskModalBody";

const AddTaskModal = () => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);
  //destructuring
  const { isOpen, onOpen, onClose } = useDisclosure();
  //temp hardcoded
  const taskTypes = ["WORK", "HOME", "HOBBY"];
  const [reload, setReload] = useAtom(FALSE_RELOAD);

  const submitTask = async () => {
    const added = await postTask(taskDetails);
    onClose();
    setReload(!reload);
    if (added) {
      const clearDetails = {
        taskType: undefined,
        name: "",
        deadline: undefined,
        estimatedDays: 0,
        estimatedHours: 0,
        estimatedMin: 0,
      };
      setTaskDetails(clearDetails);
    }
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Add Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <AddTaskModalHeader data={"Add Task"} />
          <AddTaskModalBody data={taskTypes} />
          <AddTaskModalFooter data={submitTask} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;

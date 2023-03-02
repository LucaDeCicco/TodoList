import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { postTask } from "../service/TaskService";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS, FALSE_RELOAD } from "../TaskStore";
import AddTaskModalHeader from "./AddTaskModalHeader";
import AddTaskModalFooter from "./AddTaskModalFooter";
import AddTaskModalBody from "./AddTaskModalBody";

const AddTaskModal = () => {
  const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const taskTypes = ["WORK", "HOME", "HOBBY"];
  const [reload, setReload] = useAtom(FALSE_RELOAD);
  const toast = useToast();

  const showToast = ({ title, description, status, duration, isClosable }) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
    });
  };

  const submitTask = async () => {
    const added = await postTask(taskDetails);

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
      onClose();
      setReload(!reload);
      showToast({
        title: "Task added",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      showToast({
        title: "Something went wrong",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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

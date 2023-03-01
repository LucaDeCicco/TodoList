import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import MySelect from "./MySelect";
import MyInput from "./MyInput";
import MyDatePicker from "./MyDatePicker";
import EstimationDuration from "./EstimationDuration";
import { postTask } from "../util/TaskService";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS, FALSE_RELOAD } from "../util/TaskStore";

const AddTaskModal = () => {
  const [taskDetails] = useAtom(ADD_TASK_DETAILS);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const taskTypes = ["WORK", "HOME", "HOBBY"];
  const [reload, setReload] = useAtom(FALSE_RELOAD);

  const submit = async () => {
    const res = await postTask(taskDetails);
    onClose();
    setReload(!reload);
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Add Task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <b>Choose your task type</b>
            <MySelect data={taskTypes} />
            <br />
            <MyInput data="Name" />
            <br />
            <b>When is the deadline</b>
            <MyDatePicker />
            <br />
            <EstimationDuration />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="whatsapp" onClick={submit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;

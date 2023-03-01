import React from "react";
import { ModalCloseButton, ModalHeader } from "@chakra-ui/react";

const AddTaskModalHeader = ({ data }) => (
  <div>
    <ModalHeader>{data}</ModalHeader>
    <ModalCloseButton />
  </div>
);

export default AddTaskModalHeader;

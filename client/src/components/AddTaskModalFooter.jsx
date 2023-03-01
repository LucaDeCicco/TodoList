import React from "react";
import { Button, ModalFooter } from "@chakra-ui/react";

const AddTaskModalFooter = ({ data }) => (
  <ModalFooter>
    <Button colorScheme="whatsapp" onClick={data}>
      Submit
    </Button>
  </ModalFooter>
);

export default AddTaskModalFooter;

import React from "react";
import { Button, ModalFooter } from "@chakra-ui/react";

export default function AddTaskModalFooter({ data }) {
    return (
        <ModalFooter>
            <Button colorScheme="whatsapp" onClick={data}>
                Submit
            </Button>
        </ModalFooter>
    );
}

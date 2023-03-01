import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, useDisclosure,
} from '@chakra-ui/react'
import MySelect from "./MySelect";
import MyInput from "./MyInput";
import MyDatePicker from "./MyDatePicker";
import EstimationDuration from "./EstimationDuration";

const AddTaskModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme='teal' onClick={onOpen}>Add Task</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MySelect/>
                        <br/>
                        <MyInput/>
                        <br/>
                        <MyDatePicker/>
                        <br/>
                        <EstimationDuration/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='whatsapp'>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default AddTaskModal;
import React from 'react';
import '../style/NumberInput.css';
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import {useAtom} from "jotai";
import {ADD_TASK_DETAILS} from "../util/TaskStore";

const MyNumberInput = (props) => {

    const {data} = props;
    const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

    const handleInputChange =(value)=> {
        switch (data.label){
            case "days":
                taskDetails.estimatedDays=value;
                break;
            case "hours":
                taskDetails.estimatedHours=value;
                break;
            case "min":
                taskDetails.estimatedMin=value;
                break;
        }
        setTaskDetails(taskDetails);
    }

    return (
        <FormControl className={"numberInput"}>
            <FormLabel>{data.label}</FormLabel>
            <NumberInput defaultValue={data.defaultValue} min={data.min} onChange={handleInputChange}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    )
};

export default MyNumberInput;

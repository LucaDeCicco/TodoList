import React, {useState} from 'react';
import { Select } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import {ADD_TASK_DETAILS} from "../util/TaskStore";
import {useAtom} from "jotai";


const MySelect = (props) => {

    const {data} = props;
    const [selectedOption, setSelectedOption] = useState();
    const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        taskDetails.taskType=event.target.value;
        setTaskDetails(taskDetails);
    }


    return (
        <ChakraProvider>
            <Select placeholder='Select option' value={selectedOption} onChange={handleSelectChange}>
                {data.map(item =>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </Select>
        </ChakraProvider>
    )
};

export default MySelect;
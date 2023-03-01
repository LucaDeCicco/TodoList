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

const MyNumberInput = () => {
    return (
        <FormControl className={"numberInput"}>
            <FormLabel>days</FormLabel>
            <NumberInput defaultValue={2} min={0}>
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

import React, { useState } from "react";
import { ChakraProvider, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { SORT_TYPE } from "../TaskStore";
import { SORT_CRITERIA } from "../TaskStore";

export default function FilterSelect() {
    const [selectedOption, setSelectedOption] = useState();
    const [, setSortType] = useAtom(SORT_TYPE);
    const criteria = SORT_CRITERIA;

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setSortType(event.target.value);
    };

    return (
        <ChakraProvider>
            <Select
                placeholder="Select option"
                value={selectedOption}
                onChange={handleSelectChange}
                className="chakraFilterSelect">
                {criteria?.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </Select>
        </ChakraProvider>
    );
}

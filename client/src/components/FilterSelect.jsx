import React, { useState } from "react";
import { ChakraProvider, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FILTER_TYPE } from "../TaskStore";

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [filterType, setFilterType] = useAtom(FILTER_TYPE);
  const sortCriteria = [
    "Sort by deadline ascending",
    "Sort by deadline descending",
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setFilterType(event.target.value);
  };

  return (
    <ChakraProvider>
      <Select
        placeholder="Select option"
        value={selectedOption}
        onChange={handleSelectChange}
        className="chakraFilterSelect"
      >
        {sortCriteria.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </ChakraProvider>
  );
};

export default FilterSelect;

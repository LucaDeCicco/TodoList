import React, { useState } from "react";
import { ChakraProvider, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FALSE_RELOAD, FILTER_TYPE } from "../TaskStore";

const FilterSelect = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [, setFilterType] = useAtom(FILTER_TYPE);
  const [reload, setReload] = useAtom(FALSE_RELOAD);
  const sortCriteria = [
    "Sort by deadline ascending",
    "Sort by deadline descending",
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setFilterType(event.target.value);
    setReload(!reload);
  };

  return (
    <ChakraProvider>
      <Select
        placeholder="Select option"
        value={selectedOption}
        onChange={handleSelectChange}
        className="chakraFilterSelect"
      >
        {sortCriteria?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </ChakraProvider>
  );
};

export default FilterSelect;

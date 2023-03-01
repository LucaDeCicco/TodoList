import React from "react";
import { Box, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { StarIcon, SunIcon, TimeIcon } from "@chakra-ui/icons";

const TaskCardHeader = ({ data }) => {
  function getDate() {
    const deadline = new Date(data.deadline);
    deadline.setMinutes(deadline.getMinutes() + 120);
    return deadline.toISOString().split("T")[0];
  }

  return (
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          {data.taskType === "WORK" ? <TimeIcon /> : null}
          {data.taskType === "HOME" ? <SunIcon /> : null}
          {data.taskType === "HOBBY" ? <StarIcon /> : null}
          <Box>
            <Heading size="sm">{data.taskType}</Heading>
            <Text>Deadline: {getDate()}</Text>
          </Box>
        </Flex>
      </Flex>
    </CardHeader>
  );
};

export default TaskCardHeader;

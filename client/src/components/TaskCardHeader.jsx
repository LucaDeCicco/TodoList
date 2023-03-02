import React from "react";
import { Box, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { StarIcon, SunIcon, TimeIcon } from "@chakra-ui/icons";

const TaskCardHeader = ({ data }) => {
  function getDate() {
    const deadline = new Date(data.deadline);
    deadline.setMinutes(deadline.getMinutes() + 120);
    return deadline.toISOString().split("T")[0];
  }

  const checkDeadline = () => {
    const currentDate = new Date();
    const deadline = new Date(data.deadline);
    const diffInMs = deadline.getTime() - currentDate.getTime();
    const diffInDays = diffInMs / (24 * 60 * 60 * 1000);
    return diffInDays <= 1;
  };

  return (
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          {data.taskType === "WORK" ? <TimeIcon /> : null}
          {data.taskType === "HOME" ? <SunIcon /> : null}
          {data.taskType === "HOBBY" ? <StarIcon /> : null}
          <Box>
            <Heading size="sm">{data.taskType}</Heading>
            {checkDeadline() ? (
              <Text style={{ color: "red" }}>Deadline: {getDate()}</Text>
            ) : (
              <Text>Deadline: {getDate()}</Text>
            )}
          </Box>
        </Flex>
      </Flex>
    </CardHeader>
  );
};

export default TaskCardHeader;

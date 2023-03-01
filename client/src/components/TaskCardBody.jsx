import React from "react";
import { CardBody, Text } from "@chakra-ui/react";
import DisplayEstimatedDuration from "./DisplayEstimatedDuration";

const TaskCardBody = ({ data }) => {
  return (
    <CardBody>
      <Text>{data.name}</Text>
      <DisplayEstimatedDuration
        data={{
          days: data.estimatedDays,
          hours: data.estimatedHours,
          min: data.estimatedMin,
        }}
      />
    </CardBody>
  );
};

export default TaskCardBody;

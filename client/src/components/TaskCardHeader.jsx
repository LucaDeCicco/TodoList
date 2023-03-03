import React from "react";
import { Box, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { StarIcon, SunIcon, TimeIcon } from "@chakra-ui/icons";
import moment from "moment";

export default function TaskCardHeader({ data }) {
    const getDate = () => moment(data.deadline).format("YYYY-MM-DD");

    const checkDeadline = () =>
        moment().diff(moment(data.deadline), "days") >= 0;

    return (
        <CardHeader>
            <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    {data.taskType === "WORK" ? <TimeIcon /> : null}
                    {data.taskType === "HOME" ? <SunIcon /> : null}
                    {data.taskType === "HOBBY" ? <StarIcon /> : null}
                    <Box>
                        <Heading size="sm">{data.taskType}</Heading>
                        {checkDeadline() && data.status !== "done" ? (
                            <Text style={{ color: "red" }}>
                                Deadline: {getDate()}
                            </Text>
                        ) : (
                            <Text>Deadline: {getDate()}</Text>
                        )}
                    </Box>
                </Flex>
            </Flex>
        </CardHeader>
    );
}

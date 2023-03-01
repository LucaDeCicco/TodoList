import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Text,
    Button,
    Box
} from '@chakra-ui/react'
import {CheckIcon, DeleteIcon, StarIcon, SunIcon, TimeIcon} from "@chakra-ui/icons";
import DisplayEstimatedDuration from "./DisplayEstimatedDuration";
import '../style/TaskCard.css'
import { deleteTask } from "../util/TaskService";
import {useAtom} from "jotai";
import {FALSE_RELOAD} from "../util/TaskStore";

const TaskCard = (props) => {

    const {data} = props;
    const [reload, setReload] = useAtom(FALSE_RELOAD);


    const taskIsDone =(e)=> {

    }

    const handleDeleteBtn =(e)=> {
        console.log("id: " + e.currentTarget.id)
        deleteTask(e.currentTarget.id);
        setReload(!reload);
    }

    return (
        <div className={"taskCard"}>
            <Card maxW='700px'>

                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            {data.taskType==="WORK"?<TimeIcon/>:null}
                            {data.taskType==="HOME"?<SunIcon/>:null}
                            {data.taskType==="HOBBY"?<StarIcon/>:null}
                            <Box>
                                <Heading size='sm'>{data.taskType}</Heading>
                                <Text>Deadline: {data.deadline.split("T")[0]}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>

                <CardBody>
                    <Text>{data.name}</Text>
                    <DisplayEstimatedDuration data={{days:data.estimatedDays,hours:data.estimatedHours,min:data.estimatedMin}}/>
                </CardBody>

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button id={data.id} flex='1' variant='ghost' leftIcon={<CheckIcon/>} onClick={taskIsDone}>
                        Done
                    </Button>
                    <Button id={data.id} flex='1' variant='ghost' leftIcon={<DeleteIcon/>} onClick={handleDeleteBtn}>
                        Delete
                    </Button>
                </CardFooter>

            </Card>
        </div>
    )
};

export default TaskCard;
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

const TaskCard = () => {
    return (
        <div>
            <Card maxW='700px'>

                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <TimeIcon/>
                            <SunIcon/>
                            <StarIcon/>

                            <Box>
                                <Heading size='sm'>Segun Adebayo</Heading>
                                <Text>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>

                <CardBody>
                    <Text>
                        With Chakra UI, I wanted to sync the speed of development with the speed
                        of design. I wanted the developer to be just as excited as the designer to
                        create a screen.
                    </Text>
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
                    <Button flex='1' variant='ghost' leftIcon={<CheckIcon/>}>
                        Done
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<DeleteIcon/>}>
                        Delete
                    </Button>
                </CardFooter>

            </Card>
        </div>
    )
};

export default TaskCard;
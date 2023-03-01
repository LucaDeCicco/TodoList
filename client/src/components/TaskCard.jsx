import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Avatar,
    Heading,
    Text,
    IconButton,
    Image,
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
                            {/*<Avatar>*/}
                                <TimeIcon/>
                                <SunIcon/>
                                <StarIcon/>
                            {/*</Avatar>*/}

                            <Box>
                                <Heading size='sm'>Segun Adebayo</Heading>
                                <Text>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            // icon={""}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        With Chakra UI, I wanted to sync the speed of development with the speed
                        of design. I wanted the developer to be just as excited as the designer to
                        create a screen.
                    </Text>
                </CardBody>
                {/*<Image*/}
                {/*    objectFit='cover'*/}
                {/*    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'*/}
                {/*    alt='Chakra UI'*/}
                {/*/>*/}

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button flex='1' variant='ghost' leftIcon={<CheckIcon />}>
                        Done
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<DeleteIcon />}>
                        Delete
                    </Button>

                </CardFooter>
            </Card>

        </div>
    )
};

export default TaskCard;
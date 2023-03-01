import React from 'react';
import MainTabs from "../components/MainTabs";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import '../style/MainPage.css'
import AddTaskModal from "../components/AddTaskModal";



const MainPage = () => {
    return (
        <div>
            MAIN PAGE
            <MainTabs />
            <div className={"addTaskBtn"}>
                <ChakraProvider>
                    <AddTaskModal/>
                </ChakraProvider>
            </div>
        </div>
    )
};

export default MainPage;
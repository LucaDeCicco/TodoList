import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import '../style/MainTabs.css'


const MainTabs = () => {
    return (
        <div className={"mainTabs"}>
            <ChakraProvider>
                <Tabs>
                    <TabList>
                        <Tab>To Do</Tab>
                        <Tab>Done</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </ChakraProvider>
        </div>
    )
};

export default MainTabs;
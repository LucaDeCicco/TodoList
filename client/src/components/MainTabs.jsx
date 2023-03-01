import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import "../style/MainTabs.css";
import TaskList from "./TaskList";

const MainTabs = ({ data }) => (
  <div className="mainTabs">
    <ChakraProvider>
      <Tabs>
        <TabList>
          <Tab>To Do</Tab>
          <Tab>Done</Tab>
        </TabList>
        <TabPanels className="tabPanels">
          <TabPanel>
            <div>
              <TaskList data={data.toDoTasks} />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <TaskList data={data.doneTasks} />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  </div>
);

export default MainTabs;

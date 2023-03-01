import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  ChakraProvider,
} from "@chakra-ui/react";
import "../style/MainTabs.css";
import FilterSelect from "./FilterSelect";
import MainTabToDo from "./MainTabToDo";
import MainTabDone from "./MainTabDone";

const MainTabs = ({ data }) => (
  <div className="mainTabs">
    <ChakraProvider>
      <Tabs>
        <TabList>
          <Tab>To Do</Tab>
          <Tab>Done</Tab>
          <div className="filterSelect">
            <FilterSelect />
          </div>
        </TabList>
        <TabPanels className="tabPanels">
          <MainTabToDo data={data.toDoTasks} />
          <MainTabDone data={data.doneTasks} />
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  </div>
);

export default MainTabs;

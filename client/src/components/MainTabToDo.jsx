import React from "react";
import { TabPanel, TabPanels } from "@chakra-ui/react";
import TaskList from "./TaskList";

const MainTabToDo = ({ data }) => (
  <TabPanel>
    <div>
      <TaskList data={data} />
    </div>
  </TabPanel>
);

export default MainTabToDo;

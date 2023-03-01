import React from "react";
import TaskList from "./TaskList";
import { TabPanel } from "@chakra-ui/react";

const MainTabDone = ({ data }) => (
  <TabPanel>
    <div>
      <TaskList data={data} />
    </div>
  </TabPanel>
);

export default MainTabDone;

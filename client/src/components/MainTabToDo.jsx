import React from "react";
import { TabPanel } from "@chakra-ui/react";
import TaskList from "./TaskList";

export default function MainTabToDo({ data }) {
    return (
        <TabPanel>
            <div>
                <TaskList data={data} />
            </div>
        </TabPanel>
    );
}

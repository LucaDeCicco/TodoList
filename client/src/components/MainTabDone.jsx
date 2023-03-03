import React from "react";
import TaskList from "./TaskList";
import { TabPanel } from "@chakra-ui/react";

export default function MainTabDone({ data }) {
    return (
        <TabPanel>
            <div>
                <TaskList data={data} />
            </div>
        </TabPanel>
    );
}

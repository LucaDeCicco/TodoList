import React from "react";
import { Card } from "@chakra-ui/react";
import "../style/TaskCard.css";
import TaskCardHeader from "./TaskCardHeader";
import TaskCardBody from "./TaskCardBody";
import TaskCardFooter from "./TaskCardFooter";

export default function TaskCard({ data }) {
    return (
        <div className="taskCard">
            <Card maxW="700px">
                <TaskCardHeader data={data} />
                <TaskCardBody data={data} />
                <TaskCardFooter data={data} />
            </Card>
        </div>
    );
}

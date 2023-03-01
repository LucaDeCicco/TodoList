import React from "react";
import TaskCard from "./TaskCard";
import Loading from "./Loading";

const TaskList = ({ data }) => (
  <div>
    {data ? (
      data?.map((item) => <TaskCard key={item.id} data={item} />)
    ) : (
      <Loading />
    )}
  </div>
);

export default TaskList;

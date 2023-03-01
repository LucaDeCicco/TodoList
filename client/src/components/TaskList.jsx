import React from 'react';
import TaskCard from "./TaskCard";

const TaskList = (props) => {

    const {data} = props;

    return (
        <div>
            {/*{data.map(item => (*/}
                    <TaskCard />
                    <br/>
                    <TaskCard />
                    <br/>
                    <TaskCard />
                    {/*<TaskCard key={data.id} data={item} />*/}
            {/*))}*/}
        </div>
    )
};

export default TaskList;
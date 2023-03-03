import React from "react";
import TaskCard from "./TaskCard";
import Loading from "./Loading";

export default function TaskList({ data }) {
    return (
        <div>
            {data ? (
                data?.map((item) => <TaskCard key={item.id} data={item} />)
            ) : (
                <Loading />
            )}
        </div>
    );
}

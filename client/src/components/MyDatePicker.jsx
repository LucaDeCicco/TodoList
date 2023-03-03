import React, { useEffect, useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { startOfDay } from "date-fns";
import { useAtom } from "jotai";
import { ADD_TASK_DETAILS } from "../TaskStore";

export default function MyDatePicker() {
    const [date, setDate] = useState();
    const [taskDetails, setTaskDetails] = useAtom(ADD_TASK_DETAILS);

    useEffect(() => {
        taskDetails.deadline = date;
        setTaskDetails(taskDetails);
    }, [date]);

    return (
        <SingleDatepicker
            name="date-input"
            date={date}
            onDateChange={setDate}
            minDate={startOfDay(new Date())}
        />
    );
}

import React, { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { startOfDay } from "date-fns";

const MyDatePicker = () => {
    const [date, setDate] = useState(startOfDay(new Date()));

    console.log("data: "+date);
    return (
        <SingleDatepicker
            name="date-input"
            date={date}
            onDateChange={setDate}
            minDate={startOfDay(new Date())}
        />
    );
};

export default MyDatePicker;

import {atom} from "jotai";

export const ADD_TASK_DETAILS = atom({
    taskType: undefined,
    name: "",
    deadline: undefined,
    estimatedDays: 0,
    estimatedHours: 0,
    estimatedMin: 0,
});

export const FALSE_RELOAD = atom(true);
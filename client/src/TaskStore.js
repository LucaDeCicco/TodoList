import { atom } from "jotai";

export const ADD_TASK_DETAILS = atom({
    taskType: undefined,
    name: "",
    deadline: undefined,
    estimatedDays: 0,
    estimatedHours: 0,
    estimatedMin: 0,
});

export const FALSE_RELOAD = atom(true);

export const SORT_TYPE = atom(null);

export const SORT_CRITERIA = [
    "Sort by deadline ascending",
    "Sort by deadline descending",
];

import React, { useEffect, useState } from "react";
import MainTabs from "../components/MainTabs";
import { ChakraProvider } from "@chakra-ui/react";
import "../style/MainPage.css";
import AddTaskModal from "../components/AddTaskModal";
import Loading from "../components/Loading";
import { useAtom } from "jotai";
import { FALSE_RELOAD, SORT_CRITERIA, SORT_TYPE } from "../TaskStore";
import {
    sortTasksAscending,
    sortTasksDescending,
} from "../service/TaskService";
import moment from "moment";

const BACKEND = import.meta.env.VITE_BACKEND;

export default function MainPage() {
    const [toDoTasks, setToDoTasks] = useState();
    const [doneTasks, setDoneTasks] = useState();
    const [reload] = useAtom(FALSE_RELOAD);
    const [sortType] = useAtom(SORT_TYPE);
    const sortCriteria = SORT_CRITERIA;

    const sortingFunction = (a, b) => {
        a = moment(a.deadline);
        b = moment(b.deadline);
        return a.diff(b, "days");
    };

    async function getData(toDoRoute, doneRoute) {
        const responseToDo = await fetch(toDoRoute);
        const toDoData = await responseToDo.json();
        const responseDone = await fetch(doneRoute);
        const doneData = await responseDone.json();

        if (sortType) {
            if (sortCriteria[0] === sortType) {
                setToDoTasks(toDoData.sort(sortingFunction));
                setDoneTasks(doneData.sort(sortingFunction));
            } else if (sortCriteria[1] === sortType) {
                setToDoTasks(toDoData.sort(sortingFunction).reverse());
                setDoneTasks(doneData.sort(sortingFunction).reverse());
            }
        } else {
            setToDoTasks(toDoData);
            setDoneTasks(doneData);
        }
    }

    function getRoutes() {
        const toDoRoute = BACKEND + "/todo";
        const doneRoute = BACKEND + "/done";
        return { toDoRoute, doneRoute };
    }

    const loadTasks = async () => {
        const { toDoRoute, doneRoute } = getRoutes();
        try {
            await getData(toDoRoute, doneRoute);
        } catch (e) {
            console.log(e.message);
        }
    };

    const sortTasks = () => {
        if (sortType === sortCriteria[0]) {
            setToDoTasks(sortTasksAscending(toDoTasks));
            setDoneTasks(sortTasksAscending(doneTasks));
        }
        if (sortType === sortCriteria[1]) {
            setToDoTasks(sortTasksDescending(toDoTasks));
            setDoneTasks(sortTasksDescending(doneTasks));
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        loadTasks();
    }, [reload]);

    useEffect(() => {
        if (sortType) {
            sortTasks();
        }
    }, [sortType]);

    return (
        <div>
            <h1 className="userName">De Cicco Luca</h1>
            {toDoTasks && doneTasks ? (
                <MainTabs
                    data={{ toDoTasks: toDoTasks, doneTasks: doneTasks }}
                />
            ) : (
                <Loading />
            )}
            <div className="addTaskBtn">
                <ChakraProvider>
                    <AddTaskModal />
                </ChakraProvider>
            </div>
        </div>
    );
}

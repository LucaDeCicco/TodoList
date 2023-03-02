import React, { useEffect, useState } from "react";
import MainTabs from "../components/MainTabs";
import { ChakraProvider } from "@chakra-ui/react";
import "../style/MainPage.css";
import AddTaskModal from "../components/AddTaskModal";
import Loading from "../components/Loading";
import { useAtom } from "jotai";
import { FALSE_RELOAD, SORT_CRITERIA, SORT_TYPE } from "../TaskStore";

const BACKEND = import.meta.env.VITE_BACKEND;

const MainPage = () => {
  const [toDoTasks, setToDoTasks] = useState();
  const [doneTasks, setDoneTasks] = useState();
  const [reload] = useAtom(FALSE_RELOAD);
  const [sortType] = useAtom(SORT_TYPE);
  const sortCriteria = SORT_CRITERIA;

  async function getData(toDoRoute, doneRoute) {
    const responseToDo = await fetch(toDoRoute);
    setToDoTasks(await responseToDo.json());
    const responseDone = await fetch(doneRoute);
    setDoneTasks(await responseDone.json());
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
      setToDoTasks(
        [...toDoTasks]?.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        )
      );
      setDoneTasks(
        [...doneTasks]?.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        )
      );
    }
    if (sortType === sortCriteria[1]) {
      setToDoTasks(
        [...toDoTasks]
          ?.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .reverse()
      );
      setDoneTasks(
        [...doneTasks]
          ?.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .reverse()
      );
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
      {toDoTasks && doneTasks ? (
        <MainTabs data={{ toDoTasks: toDoTasks, doneTasks: doneTasks }} />
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
};

export default MainPage;

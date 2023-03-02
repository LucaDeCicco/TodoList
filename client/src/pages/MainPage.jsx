import React, { useEffect, useState } from "react";
import MainTabs from "../components/MainTabs";
import { ChakraProvider } from "@chakra-ui/react";
import "../style/MainPage.css";
import AddTaskModal from "../components/AddTaskModal";
import Loading from "../components/Loading";
import { useAtom } from "jotai";
import { FALSE_RELOAD, FILTER_TYPE } from "../TaskStore";

const BACKEND = import.meta.env.VITE_BACKEND;

const MainPage = () => {
  const [toDoTasks, setToDoTasks] = useState();
  const [doneTasks, setDoneTasks] = useState();
  const [reload] = useAtom(FALSE_RELOAD);
  const [filterType] = useAtom(FILTER_TYPE);

  function routes() {
    let toDoRoute = BACKEND + "/todo";
    let doneRoute = BACKEND + "/done";
    switch (filterType) {
      case "Sort by deadline ascending":
        toDoRoute += "/ascending";
        doneRoute += "/ascending";
        break;
      case "Sort by deadline descending":
        toDoRoute += "/descending";
        doneRoute += "/descending";
        break;
    }
    return { toDoRoute, doneRoute };
  }

  const loadTasks = async () => {
    try {
      let { toDoRoute, doneRoute } = routes();
      const responseToDo = await fetch(toDoRoute);
      setToDoTasks(await responseToDo.json());
      const responseDone = await fetch(doneRoute);
      setDoneTasks(await responseDone.json());
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    loadTasks();
  }, [reload]);

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

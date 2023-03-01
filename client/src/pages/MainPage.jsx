import React, { useEffect, useState } from "react";
import MainTabs from "../components/MainTabs";
import { ChakraProvider } from "@chakra-ui/react";
import "../style/MainPage.css";
import AddTaskModal from "../components/AddTaskModal";
import Loading from "../components/Loading";
import { useAtom } from "jotai";
import { FALSE_RELOAD } from "../TaskStore";

const BACKEND = import.meta.env.VITE_BACKEND;

const MainPage = () => {
  const [toDoTasks, setToDoTasks] = useState();
  const [doneTasks, setDoneTasks] = useState();
  const [reload] = useAtom(FALSE_RELOAD);
  // const [filterType, setFilterType] =

  const loadTasks = async () => {
    try {
      const responseToDo = await fetch(`${BACKEND}/TODO`);
      const toDo = await responseToDo.json();
      const responseDone = await fetch(`${BACKEND}/DONE`);
      const done = await responseDone.json();

      setToDoTasks(toDo);
      setDoneTasks(done);
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

import React from "react";
import { Button, CardFooter } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { deleteTask, updateTaskStatus } from "../service/TaskService";
import { useAtom } from "jotai";
import { FALSE_RELOAD } from "../TaskStore";

const TaskCardFooter = ({ data }) => {
  const [reload, setReload] = useAtom(FALSE_RELOAD);

  const taskIsDone = (e) => {
    updateTaskStatus(e.currentTarget.id);
    setReload(!reload);
  };

  const handleDeleteBtn = (e) => {
    deleteTask(e.currentTarget.id);
    setReload(!reload);
  };

  return (
    <CardFooter
      justify="space-between"
      flexWrap="wrap"
      sx={{
        "& > button": {
          minW: "136px",
        },
      }}
    >
      {data.status !== "done" ? (
        <>
          <Button
            id={data.id}
            flex="1"
            variant="ghost"
            leftIcon={<CheckIcon />}
            onClick={taskIsDone}
          >
            Done
          </Button>
          <Button
            id={data.id}
            flex="1"
            variant="ghost"
            leftIcon={<DeleteIcon />}
            onClick={handleDeleteBtn}
          >
            Delete
          </Button>
        </>
      ) : null}
    </CardFooter>
  );
};

export default TaskCardFooter;

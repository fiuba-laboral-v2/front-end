import React, { FunctionComponent } from "react";
import { AdminTask } from "$interfaces/AdminTask";
import { ClickableCard } from "$components/ClickableCard";
import { ApprovableEntity } from "../ApprovableEntity";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListBodyProps> = (
  {
    adminTasks,
    onSelectTask,
    selectedTask
  }
) => (
  <List list={adminTasks}>
    {adminTask =>
      <ClickableCard
        key={adminTask.uuid}
        className={styles.card}
        onClick={() => onSelectTask(adminTask)}
        selected={adminTask.uuid === selectedTask?.uuid}
      >
        <ApprovableEntity approvableEntity={adminTask}/>
      </ClickableCard>
    }
  </List>
);

interface IListBodyProps {
  adminTasks: AdminTask[];
  onSelectTask: (task: AdminTask) => void;
  selectedTask?: AdminTask;
}

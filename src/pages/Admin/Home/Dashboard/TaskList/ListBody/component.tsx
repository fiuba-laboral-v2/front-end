import React, { FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
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
        <ApprovableEntity adminTask={adminTask}/>
      </ClickableCard>
    }
  </List>
);

interface IListBodyProps {
  adminTasks: TAdminTask[];
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
}

import React, { FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { Card } from "$components/Card";
import { AdminTask } from "../AdminTask";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListBodyProps> = (
  {
    adminTasks,
    onSelectTask,
    selectedTask,
    fetchMore,
    shouldFetchMore
  }
) => (
  <List list={adminTasks} fetchMore={fetchMore} shouldFetchMore={shouldFetchMore}>
    {adminTask =>
      <Card
        key={adminTask.uuid}
        className={styles.card}
        onClick={() => onSelectTask(adminTask)}
        selected={adminTask.uuid === selectedTask?.uuid}
      >
        <AdminTask adminTask={adminTask}/>
      </Card>
    }
  </List>
);

interface IListBodyProps {
  adminTasks: TAdminTask[];
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  fetchMore: () => void;
  shouldFetchMore: boolean;
}

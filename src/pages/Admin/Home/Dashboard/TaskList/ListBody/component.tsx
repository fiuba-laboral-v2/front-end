import React, { FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { Card } from "$components/Card";
import { AdminTask } from "../AdminTask";
import { List } from "$components/List";
import styles from "./styles.module.scss";

export const ListBody: FunctionComponent<IListBodyProps> = ({
  loading,
  adminTasks,
  onSelectTask,
  selectedTask,
  fetchMore,
  shouldFetchMore
}) => (
  <List
    list={adminTasks}
    fetchMoreClassName={styles.fetchMore}
    fetchMore={fetchMore}
    shouldFetchMore={shouldFetchMore}
    loading={loading}
  >
    {adminTask => (
      <Card
        key={adminTask.uuid}
        className={styles.card}
        onClick={() => onSelectTask(adminTask)}
        selected={adminTask.uuid === selectedTask?.uuid}
      >
        <AdminTask adminTask={adminTask} />
      </Card>
    )}
  </List>
);

interface IListBodyProps {
  loading: boolean;
  adminTasks: TAdminTask[];
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}

import React, { FunctionComponent, ReactNode } from "react";
import { List } from "$components/List";
import { Window } from "$components/Window";
import { Title } from "$components/Title";
import styles from "./styles.module.scss";

export const Notifications = <T extends { uuid: string }>({
  title,
  notifications,
  fetchMore,
  shouldFetchMore,
  loading,
  emptyListComponent,
  Notification
}: IComponentProps<T>) => (
  <Window>
    <Title className={styles.title}>{title}</Title>
    <List
      list={notifications || []}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
      emptyListComponent={emptyListComponent}
    >
      {notification => (
        <Notification
          className={styles.notification}
          key={notification.uuid}
          notification={notification}
        />
      )}
    </List>
  </Window>
);

interface IComponentProps<T> {
  emptyListComponent: ReactNode;
  Notification: FunctionComponent<{ className?: string; notification: T }>;
  notifications?: T[];
  loading: boolean;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  title: string;
}

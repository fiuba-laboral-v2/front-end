import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Window } from "$components/Window";
import { Notification } from "$components/Notification";
import { Title } from "$components/Title";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Notifications: FunctionComponent<IComponentProps> = ({
  translations,
  notifications,
  fetchMore,
  shouldFetchMore,
  loading,
  emptyListComponent
}) => (
  <Window>
    <Title className={styles.title}>{translations.title}</Title>
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

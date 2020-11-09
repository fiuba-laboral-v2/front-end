import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Window } from "$components/Window";
import { Notification } from "$components/Notification";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Notifications: FunctionComponent<IComponentProps> = ({
  notifications,
  fetchMore,
  shouldFetchMore,
  loading
}) => (
  <Window>
    <List
      list={notifications || []}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
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

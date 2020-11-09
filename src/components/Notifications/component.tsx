import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Window } from "$components/Window";
import { Notification } from "$components/Notification";
import { IComponentProps } from "./interfaces";

export const Notifications: FunctionComponent<IComponentProps> = ({
  notifications,
  fetchMore,
  shouldFetchMore,
  loading
}) => (
  <Window>
    <List
      list={notifications || []}
      fetchMoreClassName={""}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
    >
      {notification => <Notification notification={notification} />}
    </List>
  </Window>
);

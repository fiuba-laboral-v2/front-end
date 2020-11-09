import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Window } from "$components/Window";
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
      {notification => <div>{notification.__typename}</div>}
    </List>
  </Window>
);

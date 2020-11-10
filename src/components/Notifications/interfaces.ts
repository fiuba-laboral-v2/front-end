import { TNotification } from "$interfaces/Notification";
import { ReactNode } from "react";

export interface IContainerProps {
  emptyListComponent: ReactNode;
}

export interface IComponentProps extends IContainerProps {
  notifications?: TNotification[];
  loading: boolean;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}

import { TNotification } from "$interfaces/Notification";
import { ReactNode } from "react";

export interface ITranslations {
  title: string;
}

export interface IContainerProps {
  emptyListComponent: ReactNode;
}

export interface IComponentProps extends IContainerProps {
  notifications?: TNotification[];
  loading: boolean;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  translations: ITranslations;
}

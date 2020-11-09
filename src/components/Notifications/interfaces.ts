import { TNotification } from "$interfaces/Notification";

export interface IComponentProps {
  notifications?: TNotification[];
  loading: boolean;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}

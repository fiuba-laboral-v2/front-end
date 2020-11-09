import { TNotification } from "$hooks";

export interface IComponentProps {
  notifications?: TNotification[];
  loading: boolean;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}

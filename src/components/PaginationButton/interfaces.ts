export interface IPaginationButtonContainerProps {
  className?: string;
  spinnerClassName?: string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  listIsEmpty: boolean;
}

export interface IListTranslations {
  fetchMore: string;
}

export interface IPaginationButtonProps extends IPaginationButtonContainerProps {
  translations: IListTranslations;
}

export interface ITranslations {
  cleanFilters: string;
  filters: string;
}

export interface IContainerProps {
  showFilter: boolean;
  onClick: () => void;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
}

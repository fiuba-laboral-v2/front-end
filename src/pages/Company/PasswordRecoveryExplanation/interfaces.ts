export interface ITranslations {
  title: string;
  explanation: string;
  retry: string;
}

export interface IComponents {
  translations?: ITranslations;
  onRetry: () => void;
}

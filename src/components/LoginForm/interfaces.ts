import { ReactElement } from "react";
import { ErrorHandlers } from "$models/handleError";

export interface ITranslations {
  title: string;
  password: string;
  logIn: string;
  badCredentialsMessage: string;
  creditsTitle: string;
  seeCredits: string;
  questionsTitle: string;
}

export interface IContainerProps<IVariables> {
  className?: string;
  title?: string;
  seededUsersText: string;
  usernameField?: ReactElement;
  recoverPasswordLink?: ReactElement;
  signUpLink?: ReactElement;
  switchLoginFormLink?: ReactElement;
  initialValues: IVariables;
  onSubmit: OnSubmit<IVariables>;
  hidden: boolean;
}

export type OnSubmit<IVariables> = (
  values: IVariables,
  errorHandlers: ErrorHandlers
) => void | Promise<any>;

export interface IComponentProps<IVariables> extends IContainerProps<IVariables> {
  className?: string;
  translations: ITranslations;
  onSubmit: (values: IVariables) => void | Promise<any>;
}

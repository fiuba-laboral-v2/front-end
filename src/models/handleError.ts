import { ApolloError } from "apollo-client";

type ErrorName =
  "UserEmailAlreadyExistsError" |
  "BadCredentials" |
  "UserNotFound" |
  "MissingTranslationError";

export interface IErrorHandlers {
  UserEmailAlreadyExistsError?: () => void;
  BadCredentials?: () => void;
  UserNotFound?: () => void;
  MissingTranslationError?: () => void;
  DefaultError?: () => void;
}

export const handleError = (errors: ApolloError, handlers: IErrorHandlers) => {
  let unknownErrorWasFound = false;
  for (const error of errors.graphQLErrors) {
    const data = error.extensions?.data;
    const errorName: ErrorName = data?.errorType;
    const handler = handlers[errorName];
    if (handler) {
      handler();
    } else {
      unknownErrorWasFound = true;
    }
  }
  if (unknownErrorWasFound) return (handlers.DefaultError && handlers.DefaultError!()) || undefined;
};

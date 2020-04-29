import { ApolloError } from "apollo-client";

type ErrorName =
  "UserEmailAlreadyExistsError" |
  "BadCredentialsError" |
  "UserNotFoundError" |
  "MissingTranslationError";

export type ErrorHandlers = {
  [key in ErrorName]?: () => void;
} & {
  DefaultError?: () => void;
};

export const handleError = (errors: ApolloError, handlers: ErrorHandlers) => {
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

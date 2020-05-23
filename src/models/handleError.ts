import { ApolloError } from "apollo-client";

type ErrorName =
  "UserEmailAlreadyExistsError" |
  "CompanyCuitAlreadyExistsError" |
  "BadCredentialsError" |
  "UserNotFoundError" |
  "AuthenticationError" |
  "UnauthorizedError" |
  "ValidationError" |
  "MissingTranslationError";

type HandlerName = ErrorName | "defaultHandler";

export type ErrorHandlers = {
  [key in HandlerName]?: () => void;
};

export const handleError = (errors: ApolloError, handlers: ErrorHandlers = {}) => {
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
  if (!unknownErrorWasFound) return;
  if (!handlers.defaultHandler) return;

  handlers.defaultHandler();
};

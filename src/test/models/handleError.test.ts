import { ApolloError } from "apollo-client";
import { GraphQLError } from "graphql";
import { handleError } from "$models/handleError";

interface ICreateGraphQLErrorProps {
  errorType?: string;
  withNoData?: boolean;
}

describe("handleError", () => {
  const createGraphQLError = ({ errorType, withNoData = false }: ICreateGraphQLErrorProps) => {
    return new GraphQLError(
      "some message",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      withNoData ? undefined : { data: { errorType: errorType } }
    );
  };

  const createError = (errorTypes: ICreateGraphQLErrorProps[]) => {
    const errors = errorTypes.map(errorType => createGraphQLError(errorType));
    return new ApolloError({ graphQLErrors: errors });
  };

  it("should do nothing if no callback is given", () => {
    const error = createError([{ errorType: "customError" }]);
    handleError(error, {});
  });

  it("should do nothing if there is no data in the error", () => {
    const error = createError([{ withNoData: true }]);
    handleError(error, {});
  });

  it("should execute the default error", () => {
    const error = createError([{ errorType: "customError" }]);
    const defaultCallback = jest.fn(() => undefined);
    handleError(error, { DefaultError: defaultCallback });
    expect(defaultCallback.mock.calls.length).toBe(1);
  });

  it("should execute the BadCredentials error and not default", () => {
    const error = createError([{ errorType: "BadCredentialsError" }]);
    const defaultErrorCallback = jest.fn(() => undefined);
    const badCredentialsErrorCallback = jest.fn(() => undefined);
    handleError(
      error,
      {
        BadCredentialsError: badCredentialsErrorCallback,
        DefaultError: defaultErrorCallback
      }
      );
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(1);
    expect(defaultErrorCallback.mock.calls.length).toBe(0);
  });

  it("should only execute the UserEmailAlreadyExistsError", () => {
    const error = createError([{ errorType: "UserEmailAlreadyExistsError" }]);
    const defaultErrorCallback = jest.fn(() => undefined);
    const badCredentialsErrorCallback = jest.fn(() => undefined);
    const userEmailAlreadyExistsErrorCallback = jest.fn(() => undefined);
    handleError(
      error,
      {
        UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
        BadCredentialsError: badCredentialsErrorCallback,
        DefaultError: defaultErrorCallback
      }
    );
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(0);
    expect(defaultErrorCallback.mock.calls.length).toBe(0);
  });

  it("should execute the UserEmailAlreadyExistsError and BadCredentialsError", () => {
    const error = createError(
      [
        { errorType: "UserEmailAlreadyExistsError" },
        { errorType: "BadCredentialsError" }
      ]
    );
    const badCredentialsErrorCallback = jest.fn(() => undefined);
    const userEmailAlreadyExistsErrorCallback = jest.fn(() => undefined);
    handleError(
      error,
      {
        UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
        BadCredentialsError: badCredentialsErrorCallback
      }
    );
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(1);
  });
});

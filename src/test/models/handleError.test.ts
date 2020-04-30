import { ApolloError } from "apollo-client";
import { GraphQLError } from "graphql";
import { handleError } from "$models/handleError";

describe("handleError", () => {
  const createError = (
    {
      errorType,
      withNoData = false
    }:
    {
      errorType?: string,
      withNoData?: boolean
    }
  ) => {
    const error = new GraphQLError(
      "some message",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      withNoData ? undefined : { data: { errorType: errorType } }
    );
    return new ApolloError({ graphQLErrors: [error] });
  };

  it("should do nothing if no callback is given", () => {
    const error = createError({ errorType: "customError" });
    handleError(error, {});
  });

  it("should do nothing if there is no data in the error", () => {
    const error = createError({ withNoData: true });
    handleError(error, {});
  });

  it("should execute the default error", () => {
    const error = createError({ errorType: "customError" });
    const defaultCallback = jest.fn(() => undefined);
    handleError(error, { DefaultError: defaultCallback });
    expect(defaultCallback.mock.calls.length).toBe(1);
  });

  it("should execute the BadCredentials error and not default", () => {
    const error = createError({ errorType: "BadCredentialsError" });
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
    const error = createError({ errorType: "UserEmailAlreadyExistsError" });
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
});

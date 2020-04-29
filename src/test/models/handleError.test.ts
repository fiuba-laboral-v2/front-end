import { ApolloError } from "apollo-client";
import { GraphQLError } from "graphql";
import { handleError } from "$models/handleError";

describe("handleError", () => {
  const createError = (errorType: string) => {
    const error = new GraphQLError(
      "some message",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { data: { errorType: errorType } }
    );
    return new ApolloError({ graphQLErrors: [error] });
  };

  it("should execute the default error", () => {
    const error = createError("customError");
    const defaultCallback = jest.fn(() => undefined);
    handleError(error, { DefaultError: defaultCallback });
    expect(defaultCallback.mock.calls.length).toBe(1);
  });

  it("should execute the BadCredentials error and not default", () => {
    const error = createError("BadCredentialsError");
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
    const error = createError("UserEmailAlreadyExistsError");
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

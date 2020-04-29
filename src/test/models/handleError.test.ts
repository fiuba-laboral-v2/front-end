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
    const error = createError("BadCredentials");
    const defaultCallback = jest.fn(() => undefined);
    const badCredentialsCallback = jest.fn(() => undefined);
    handleError(
      error,
      {
        BadCredentials: badCredentialsCallback,
        DefaultError: defaultCallback
      }
      );
    expect(badCredentialsCallback.mock.calls.length).toBe(1);
    expect(defaultCallback.mock.calls.length).toBe(0);
  });

  it("should only execute the UserEmailAlreadyExistsError", () => {
    const error = createError("UserEmailAlreadyExistsError");
    const defaultCallback = jest.fn(() => undefined);
    const badCredentialsCallback = jest.fn(() => undefined);
    const userEmailAlreadyExistsErrorCallback = jest.fn(() => undefined);
    handleError(
      error,
      {
        UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
        BadCredentials: badCredentialsCallback,
        DefaultError: defaultCallback
      }
    );
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(badCredentialsCallback.mock.calls.length).toBe(0);
    expect(defaultCallback.mock.calls.length).toBe(0);
  });
});

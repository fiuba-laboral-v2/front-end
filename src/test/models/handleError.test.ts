import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { handleError } from "$models/handleError";

interface ICreateGraphQLErrorProps {
  errorType?: string;
}

describe("handleError", () => {
  const createGraphQLError = ({ errorType }: ICreateGraphQLErrorProps) => {
    return new GraphQLError(
      "some message",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      errorType ? { data: { errorType: errorType } } : undefined
    );
  };

  const createError = (errorTypes: ICreateGraphQLErrorProps[]) => {
    const errors = errorTypes.map(errorType => createGraphQLError(errorType));
    return new ApolloError({ graphQLErrors: errors });
  };

  it("should do nothing if no callback is given", () => {
    const error = createError([{ errorType: "UnknownError" }]);
    handleError(error, {});
  });

  it("should do nothing if there is no data in the error", () => {
    const error = createError([{}]);
    handleError(error, {});
  });

  it("should execute the default error if an UnknownError was received", () => {
    const error = createError([{ errorType: "UnknownError" }]);
    const defaultCallback = jest.fn();
    handleError(error, { defaultHandler: defaultCallback });
    expect(defaultCallback.mock.calls.length).toBe(1);
  });

  it("should execute the BadCredentials error and not default", () => {
    const error = createError([{ errorType: "BadCredentialsError" }]);
    const defaultErrorCallback = jest.fn();
    const badCredentialsErrorCallback = jest.fn();
    handleError(error, {
      BadCredentialsError: badCredentialsErrorCallback,
      defaultHandler: defaultErrorCallback
    });
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(1);
    expect(defaultErrorCallback.mock.calls.length).toBe(0);
  });

  it("should only execute the UserEmailAlreadyExistsError", () => {
    const error = createError([{ errorType: "UserEmailAlreadyExistsError" }]);
    const defaultErrorCallback = jest.fn();
    const badCredentialsErrorCallback = jest.fn();
    const userEmailAlreadyExistsErrorCallback = jest.fn();
    handleError(error, {
      UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
      BadCredentialsError: badCredentialsErrorCallback,
      defaultHandler: defaultErrorCallback
    });
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(0);
    expect(defaultErrorCallback.mock.calls.length).toBe(0);
  });

  it("should execute the UserEmailAlreadyExistsError and BadCredentialsError", () => {
    const error = createError([
      { errorType: "UserEmailAlreadyExistsError" },
      { errorType: "BadCredentialsError" }
    ]);
    const badCredentialsErrorCallback = jest.fn();
    const userEmailAlreadyExistsErrorCallback = jest.fn();
    handleError(error, {
      UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
      BadCredentialsError: badCredentialsErrorCallback
    });
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(badCredentialsErrorCallback.mock.calls.length).toBe(1);
  });

  it("should execute the UserEmailAlreadyExistsError and defaultHandler", () => {
    const error = createError([
      { errorType: "UserEmailAlreadyExistsError" },
      { errorType: "UnknownError" }
    ]);
    const defaultErrorCallback = jest.fn();
    const userEmailAlreadyExistsErrorCallback = jest.fn();
    handleError(error, {
      UserEmailAlreadyExistsError: userEmailAlreadyExistsErrorCallback,
      defaultHandler: defaultErrorCallback
    });
    expect(userEmailAlreadyExistsErrorCallback.mock.calls.length).toBe(1);
    expect(defaultErrorCallback.mock.calls.length).toBe(1);
  });

  it("should execute the defaultHandler if there is no data in the error", () => {
    const error = createError([{}]);
    const defaultErrorCallback = jest.fn();
    handleError(error, { defaultHandler: defaultErrorCallback });
    expect(defaultErrorCallback.mock.calls.length).toBe(1);
  });
});

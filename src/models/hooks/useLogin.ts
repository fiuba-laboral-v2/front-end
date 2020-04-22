import { useMutation } from "@apollo/react-hooks";
import { GraphQLError } from "graphql";
import { LOGIN } from "$mutations";

export const useLogin = () => {
  const [login] = useMutation<{ login: string }, ILoginVariables>(LOGIN);

  return async (variables: ILoginVariables) => {
    const result = await login({ variables, fetchPolicy: "no-cache" });
    return { token: result.data?.login, errors: result.errors } as UseLoginResult;
  };
};

export interface ILoginVariables {
  email: string;
  password: string;
}

type UseLoginResult = {
  token: undefined;
  errors: GraphQLError;
} | {
  token: string;
  errors: undefined
};

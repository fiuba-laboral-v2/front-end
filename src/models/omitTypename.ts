import { isArray, isPlainObject, omit } from "lodash";

export const omitTypename = (variables: any) => {
  if (!isPlainObject(variables)) return variables;
  Object.keys(variables).forEach(key => {
    if (isPlainObject(variables[key])) {
      variables[key] = omitTypename(variables[key]);
    }
    if (isArray(variables[key])) {
      variables[key] = variables[key].map((value: any) => omitTypename(value));
    }
  });
  return omit(variables, "__typename");
};

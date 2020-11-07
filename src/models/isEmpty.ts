import { isNaN } from "lodash";

export const isEmpty = <Value>(value: Value) =>
  !isNaN(value) && [undefined, "null", "{}", "[]", '""'].includes(JSON.stringify(value));

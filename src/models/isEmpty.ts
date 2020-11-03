import { isEmpty as enumerableIsEmpty } from "lodash";

export const isEmpty = <Value>(value: Value) => {
  if (typeof value === "number") return isNaN(value);
  return enumerableIsEmpty(value);
};

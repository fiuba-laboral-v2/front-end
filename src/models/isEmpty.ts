export const isEmpty = <Value>(value: Value) =>
  [undefined, "null", "{}", "[]", '""'].includes(JSON.stringify(value));

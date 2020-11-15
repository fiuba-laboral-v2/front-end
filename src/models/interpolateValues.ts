import { template } from "lodash";

export const interpolateValues = (text: string, values: object) => {
  return template(text)(values);
};

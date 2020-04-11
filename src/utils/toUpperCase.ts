import { capitalize } from "lodash";

export const toUpperCase = (description: string) =>
  description.split(" ").map(capitalize).join(" ");

import { capitalize } from "lodash";

export const TextFormatter = {
  capitalize: (text: string) =>
    text.split(" ").map(capitalize).join(" ")
};

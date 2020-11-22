import { ISection } from "../interfaces/Section";
import { sortBy } from "lodash";

export const sortSections = (sections?: ISection[]) => sortBy(sections, ["displayOrder"]);

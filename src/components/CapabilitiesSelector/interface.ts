import { ICapability } from "../../interfaces/Capability";

export interface ICapabiltiesSelectorContainer {
  label: string;
}

export interface ICapabiltiesSelector extends ICapabiltiesSelectorContainer {
  options: ICapability[];
}

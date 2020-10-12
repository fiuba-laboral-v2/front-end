import { ICapability } from "../../interfaces/Capability";

export interface ICapabilitiesSelectorContainer {
  label: string;
}

export interface ICapabilitiesSelector extends ICapabilitiesSelectorContainer {
  options: ICapability[];
}

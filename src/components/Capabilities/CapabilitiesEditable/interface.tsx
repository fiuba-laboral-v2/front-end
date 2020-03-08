import { ICapability } from "$interfaces/Applicant";

export interface ICapabilitiesEditableProps {
  setState: (newValue: string | number) => void;
  onfinish: () => void;
  onDelete: (item: string) => void;
  capabilities: string[];
  title: string;
}

export interface ICapabilitiesEditableContainerProps {
  setList: (newValue: string | number) => void;
  capabilities: ICapability[];
}

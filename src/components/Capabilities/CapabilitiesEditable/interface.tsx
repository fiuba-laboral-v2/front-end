import { ICapability } from "$interfaces/Applicant";

export interface ICapabilitiesEditableProps {
  setState: (newValue: string) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
  capabilities: ICapability[];
  title: string;
}

export interface ICapabilitiesEditableContainerProps {
  setList: (newValue: string) => void;
  deleteCapability: (description: string) => void;
  capabilities: ICapability[];
}

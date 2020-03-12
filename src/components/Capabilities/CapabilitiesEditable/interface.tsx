import { ICapability } from "$interfaces/Applicant";

export interface ICapabilitiesEditableProps {
  setState: (newCapability: string) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
  capabilities: ICapability[];
  title: string;
}

export interface ICapabilitiesEditableContainerProps {
  addCapability: (newCapability: string) => void;
  deleteCapability: (description: string) => void;
  capabilities: ICapability[];
}

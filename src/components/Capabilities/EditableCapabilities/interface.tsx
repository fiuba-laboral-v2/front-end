import { ICapability } from "$interfaces/Applicant";

export interface IEditableCapabilitiesProps {
  setState: (newCapability: string) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
  capabilities: ICapability[];
  title: string;
}

export interface IEditableCapabilitiesContainerProps {
  addCapability: (newCapability: string) => void;
  deleteCapability: (description: string) => void;
  capabilities: ICapability[];
}

import { ICapability } from "$interfaces/Applicant";

export interface ICapabilitiesEditableProps {
  setState: (newValue: string | number) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
  capabilities: ICapability[];
  title: string;
}

export interface ICapabilitiesEditableContainerProps {
  setList: (newValue: string | number) => void;
  capabilities: ICapability[];
}

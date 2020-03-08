import { ICapability } from "$interfaces/Applicant";

export interface ICapabilitiesEditableProps {
  setList: (newValue: string | number) => void;
  capabilities: string[];
  title: string;
}

export interface ICapabilitiesEditableContainerProps {
  setList: (newValue: string | number) => void;
  capabilities: ICapability[];
  onFinish?: () => void;
}

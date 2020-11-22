import { ICapability } from "$interfaces/Capability";

export interface ICapabilitiesProps {
  mobileLayout?: boolean;
  capabilities: ICapability[];
  title?: string;
  className?: string;
}

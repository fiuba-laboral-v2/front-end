import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainer {
  className?: string;
  setStatus: (status: ApprovalStatus) => void;
}

export interface ITranslations {
  reject: string;
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}

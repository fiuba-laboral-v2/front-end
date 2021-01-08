import { IMyOffer } from "$interfaces/Applicant";

export interface IApplyButtonContainerProps {
  offer: IMyOffer;
}

export interface IApplyButtonProps extends IApplyButtonContainerProps {
  translations: ITranslations;
  confirmDialogIsOpen: boolean;
  onApply: () => void;
  onApplyConfirm: () => void;
  onCancel: () => void;
}

export interface ITranslations {
  apply: string;
  applySuccess: string;
  alreadyApplied: string;
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
  confirmDialogConfirm: string;
}

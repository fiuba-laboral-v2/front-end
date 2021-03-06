import { ButtonKind } from "$components/Button";
import { ReactElement } from "react";

export interface IActionButtonContainerProps {
  translations: IActionButtonTranslations;
  showActionButton: boolean;
  onSubmitConfirm: () => void;
  messageDescription: ({ isModal }: { isModal: boolean }) => ReactElement<string>;
  className: string;
  kind: ButtonKind;
}

export interface IActionButtonProps extends IActionButtonContainerProps {
  handleAction: () => void;
  confirmDialogIsOpen: boolean;
  onCloseConfirmDialog: () => void;
}

export interface IActionButtonTranslations {
  buttonText: string;
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogConfirm: string;
  confirmDialogCancel: string;
}

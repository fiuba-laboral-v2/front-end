import { IOffer } from "$interfaces/Offer";
import { ReactNode } from "react";

interface IActionsConfirmDialogBaseProps {
  confirmRepublishIsOpen: boolean;
  confirmExpireIsOpen: boolean;
  closeRepublishDialog: () => void;
  closeExpireOfferDialog: () => void;
}

export interface IActionsConfirmDialogContainerProps extends IActionsConfirmDialogBaseProps {
  offer: IOffer;
  refetch: () => void;
}

export interface IActionsConfirmDialogProps extends IActionsConfirmDialogBaseProps {
  onSubmitRepublish: () => void;
  onSubmitExpireOffer: () => void;
  republishConfirmDialogDescription: ReactNode;
  expireConfirmDialogDescription: ReactNode;
  translations: ITranslations;
}
export interface ITranslations {
  confirmRepublishTitle: string;
  confirmRepublishConfirm: string;
  confirmRepublishDescription: string;
  confirmRepublishCancel: string;
  confirmExpireTitle: string;
  confirmExpireConfirm: string;
  confirmExpireDescription: string;
  confirmExpireCancel: string;
}

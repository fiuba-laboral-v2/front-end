import { IOffer } from "$interfaces/Offer";

interface IActionsBaseProps {
  handleRepublishOffer: () => void;
  handleExpireOffer: () => void;
}

export interface IActionsContainerProps extends IActionsBaseProps {
  offer: IOffer;
}

export interface IActionsProps extends IActionsBaseProps {
  translations: ITranslations;
  handleEdit: () => void;
  showRepublishButton: boolean;
  showExpireButton: boolean;
  republishTooltipMessage: string;
  expireTooltipMessage: string;
}

export interface ITranslations {
  edit: string;
  expire: string;
  republish: string;
}

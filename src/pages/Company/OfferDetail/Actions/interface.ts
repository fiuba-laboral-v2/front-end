import { IOffer } from "$interfaces/Offer";
import { ReactElement } from "react";

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
  republishTooltipMessage: ReactElement<string>;
  expireTooltipMessage: ReactElement<string>;
}

export interface ITranslations {
  edit: string;
  expire: string;
  republish: string;
  tooltipRepublishStudents: string;
  tooltipRepublishGraduates: string;
  tooltipExpireStudents: string;
  tooltipExpireGraduates: string;
}

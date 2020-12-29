import { ButtonKind } from "$components/Button";
import { IOffer } from "$interfaces/Offer";
import { IActionButtonTranslations } from "../ActionButton/interface";

export interface IRepublishButtonContainerProps {
  offer: IOffer;
  className: string;
  kind: ButtonKind;
}

export interface IRepublishButtonProps extends IRepublishButtonContainerProps {
  translations: IActionButtonTranslations;
}

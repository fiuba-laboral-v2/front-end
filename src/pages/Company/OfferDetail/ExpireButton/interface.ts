import { ButtonKind } from "$components/Button";
import { IOffer } from "$interfaces/Offer";
import { IActionButtonTranslations } from "../ActionButton/interface";

export interface IExpireButtonContainerProps {
  offer: IOffer;
  className: string;
  kind: ButtonKind;
}

export interface IExpireButtonProps extends IExpireButtonContainerProps {
  translations: IActionButtonTranslations;
}

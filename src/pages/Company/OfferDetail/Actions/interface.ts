import { IOffer } from "$interfaces/Offer";

export interface IActionsContainerProps {
  offer: IOffer;
}

export interface IActionsProps extends IActionsContainerProps {
  translations: ITranslations;
  handleEdit: () => void;
}

export interface ITranslations {
  edit: string;
}

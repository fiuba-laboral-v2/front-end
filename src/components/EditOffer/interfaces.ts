import { ICreateOfferValues, IOffer } from "$interfaces/Offer";
import { FormikProps } from "formik";
import { ReactNode } from "react";
import { IConfirmDialogTranslations } from "../Dialog/FormConfirmDialog";

export interface IEditOfferTranslations extends IConfirmDialogTranslations {
  create: string;
  edit: string;
  submit: string;
}

export interface IEditOfferContainerProps {
  loading: boolean;
  title?: string;
  offer?: IOffer;
  autoFocus?: boolean;
  formFooter: (params: FormikProps<ICreateOfferValues>) => ReactNode;
  onSubmit: (values: ICreateOfferValues) => Promise<void>;
  infoMessageTranslationGroup: string;
}

export interface IEditOfferProps extends IEditOfferContainerProps {
  acceptanceCriteria?: string;
  modelToValues: (model?: IOffer) => ICreateOfferValues;
  validateForm: (values: ICreateOfferValues) => { _form: string } | undefined;
}

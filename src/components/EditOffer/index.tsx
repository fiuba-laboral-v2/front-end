import React, { FunctionComponent, ReactNode } from "react";
import { FormikProps } from "formik";
import { Form } from "$components/Form";
import { InfoMessage } from "$components/InfoMessage";
import { MainInformationFormSection } from "./MainInformationFormSection";
import { DescriptionFormSection } from "./DescriptionFormSection";
import { RecipientsFormSection } from "./RecipientsFormSection";
import { ICreateOfferValues, IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { FormikForm } from "../FormikForm";

export const EditOffer: FunctionComponent<ICreateOfferProps> = ({
  title,
  offer,
  acceptanceCriteria,
  infoMessageTranslationGroup,
  formFooter,
  formikProps,
  modelToValues,
  autoFocus
}) => (
  <Form title={title} acceptanceCriteria={acceptanceCriteria}>
    <FormikForm initialValuesModel={offer} {...{ modelToValues, formikProps }}>
      {infoMessageTranslationGroup && (
        <InfoMessage translationGroupName={infoMessageTranslationGroup} />
      )}
      <MainInformationFormSection className={styles.formSection} autoFocus={autoFocus} />
      <DescriptionFormSection
        className={styles.formSection}
        sections={formikProps.values.sections}
        name="sections"
      />
      <RecipientsFormSection className={styles.formSection} />
    </FormikForm>
    {formFooter(formikProps)}
  </Form>
);

export interface IEditOfferTranslations {
  create: string;
  edit: string;
  submit: string;
}

interface ICreateOfferProps {
  offer?: IOffer;
  autoFocus?: boolean;
  acceptanceCriteria?: string;
  title?: string;
  infoMessageTranslationGroup?: string;
  formFooter: (params: FormikProps<ICreateOfferValues>) => ReactNode;
  formikProps: FormikProps<ICreateOfferValues>;
  modelToValues: (model?: IOffer) => ICreateOfferValues;
}

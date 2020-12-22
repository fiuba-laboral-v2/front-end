import React, { FunctionComponent } from "react";
import { FormFooter } from "$components/FormFooter";
import { FormikProps } from "formik";
import { Form } from "$components/Form";
import { IAdminSettingsValues, ISettingsTranslations } from "./interfaces";
import { SecretarySettingsFormSection } from "./SecretarySettingsFormSection";

export const Settings: FunctionComponent<ISettingsProps> = ({
  translations,
  formikProps: { isSubmitting, errors }
}) => (
  <Form title={translations?.title}>
    {translations && <SecretarySettingsFormSection {...{ translations }} />}
    <FormFooter {...{ isSubmitting, errors }} submitButtonText={translations?.submit} />
  </Form>
);

interface ISettingsProps {
  formikProps: FormikProps<IAdminSettingsValues>;
  translations?: ISettingsTranslations;
}

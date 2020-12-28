import React, { FunctionComponent } from "react";
import { FormFooter } from "$components/FormFooter";
import { FormikProps } from "formik";
import { Form } from "$components/Form";
import { ISettingsTranslations } from "./interfaces";
import { SecretarySettingsFormSection } from "./SecretarySettingsFormSection";
import { IAdminSettings } from "$interfaces/AdminSettings";
import { InfoMessage } from "$components/InfoMessage";
import { SharedSettingsFormSection } from "./SharedSettingsFormSection";

export const Settings: FunctionComponent<ISettingsProps> = ({
  translations,
  formikProps: { isSubmitting, errors }
}) => (
  <Form title={translations?.title}>
    <InfoMessage message={translations?.infoMessage} />
    {translations && <SecretarySettingsFormSection translations={translations} />}
    {translations && <SharedSettingsFormSection translations={translations} />}
    <FormFooter
      isSubmitting={isSubmitting}
      errors={{ _form: undefined, ...errors }}
      submitButtonText={translations?.submit}
    />
  </Form>
);

interface ISettingsProps {
  formikProps: FormikProps<IAdminSettings>;
  translations?: ISettingsTranslations;
}

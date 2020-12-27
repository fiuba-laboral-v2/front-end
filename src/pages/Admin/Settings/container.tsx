import React, { FunctionComponent, useCallback } from "react";
import { Settings } from "./component";
import { Window } from "$components/Window";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { ISettingsTranslations } from "./interfaces";
import {
  useAdminSettings,
  useCurrentUser,
  useMutation,
  useShowSuccess,
  useTranslations
} from "$hooks";
import { IAdminSettings } from "$interfaces/AdminSettings";
import { UPDATE_ADMIN_SETTINGS } from "$mutations";
import { IInstitutionsTranslations } from "$components/SecretarySelector/interfaces";

export const SettingsContainer: FunctionComponent = () => {
  const showSuccess = useShowSuccess();
  const settings = useAdminSettings();
  const settingsTranslations = useTranslations<ISettingsTranslations>("adminSettings");
  const institutionsTranslations = useTranslations<IInstitutionsTranslations>("institutions");
  const { mutation: updateAdminSettings } = useMutation<
    IAdminSettings,
    { updateAdminSettings: IAdminSettings }
  >(UPDATE_ADMIN_SETTINGS);
  const isExtension = useCurrentUser().data.getCurrentUser?.admin?.isExtension();

  let translations: ISettingsTranslations | undefined;
  if (settingsTranslations && institutionsTranslations) {
    translations = {
      ...settingsTranslations,
      secretaryName: isExtension
        ? institutionsTranslations.extension
        : institutionsTranslations.graduados
    };
  }

  const modelToValues = useCallback(
    (model?: IAdminSettings) => ({
      offerDurationInDays: model?.offerDurationInDays || NaN,
      email: model?.email || "",
      emailSignature: model?.emailSignature || "",
      companySignUpAcceptanceCriteria: model?.companySignUpAcceptanceCriteria || "",
      companyEditableAcceptanceCriteria: model?.companyEditableAcceptanceCriteria || "",
      editOfferAcceptanceCriteria: model?.editOfferAcceptanceCriteria || ""
    }),
    []
  );

  const onSubmit = useCallback(
    async (variables: IAdminSettings) => {
      const { error } = await updateAdminSettings({ variables });
      if (!error) showSuccess({ message: translations!.updateSuccess });
    },
    [updateAdminSettings, showSuccess, translations]
  );

  return (
    <Window loading={!settings || !translations}>
      <Formik initialValues={modelToValues()} {...{ onSubmit }}>
        {formikProps => (
          <FormikForm initialValuesModel={settings} {...{ modelToValues, formikProps }}>
            <Settings {...{ formikProps, translations }} />
          </FormikForm>
        )}
      </Formik>
    </Window>
  );
};

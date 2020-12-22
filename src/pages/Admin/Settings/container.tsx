import React, { FunctionComponent, useCallback } from "react";
import { Settings } from "./component";
import { Window } from "$components/Window";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { ISettingsTranslations } from "./interfaces";
import { useAdminSettings, useTranslations } from "$hooks";
import { IAdminSettings } from "$interfaces/AdminSettings";

export const SettingsContainer: FunctionComponent = () => {
  const settings = useAdminSettings();
  const translations = useTranslations<ISettingsTranslations>("adminSettings");

  const modelToValues = useCallback(
    (model?: IAdminSettings) => ({
      offerDurationInDays: model?.offerDurationInDays || NaN,
      email: model?.email || ""
    }),
    []
  );

  const onSubmit = useCallback(async (values: IAdminSettings) => {
    alert(JSON.stringify(values));
  }, []);

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

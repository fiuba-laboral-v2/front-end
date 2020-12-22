import React, { FunctionComponent, useCallback } from "react";
import { Settings } from "./component";
import { Window } from "$components/Window";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { IAdminSettingsValues, ISettingsTranslations } from "./interfaces";
import { useTranslations } from "$hooks";

export const SettingsContainer: FunctionComponent = () => {
  const settings = undefined;
  const translations = useTranslations<ISettingsTranslations>("adminSettings");

  const modelToValues = useCallback(
    (model?: IAdminSettingsValues) => ({
      offerDurationInDays: model?.offerDurationInDays || NaN,
      email: model?.email || "",
      _form: ""
    }),
    []
  );

  const onSubmit = useCallback(async (values: IAdminSettingsValues) => {
    alert(JSON.stringify(values));
  }, []);

  return (
    <Window>
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

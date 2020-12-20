import React, { FunctionComponent } from "react";
import { SignUp } from "./component";
import { Window } from "$components/Window";
import { useSaveAdmin, useTranslations, useShowError } from "$hooks";
import { FormikHelpers } from "formik/dist/types";
import { Secretary } from "$interfaces/Secretary";
import { ITranslations, ISaveAdminForm } from "./interfaces";

export const SignUpContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminSignUp");
  const { saveAdmin } = useSaveAdmin();
  const showError = useShowError();

  const onSubmitAdmin = async (
    { _form, ...variables }: ISaveAdminForm,
    { setSubmitting }: FormikHelpers<ISaveAdminForm>
  ) => {
    const result = await saveAdmin({
      variables,
      errorHandlers: {
        BadCredentialsError: () => showError({ message: translations?.badCredentialsError }),
        AdminAlreadyExistsError: () => showError({ message: translations?.adminAlreadyExistsError })
      }
    });

    if (result.error) return;
    setSubmitting(false);
  };

  const initialValues = {
    secretary: Secretary.extension,
    user: {
      name: "",
      surname: "",
      email: "",
      dni: "",
      password: ""
    },
    _form: ""
  };

  return (
    <Window loading={!translations}>
      <SignUp translations={translations} onSubmit={onSubmitAdmin} initialValues={initialValues} />
    </Window>
  );
};

import React, { FunctionComponent } from "react";
import { SaveAdminForm } from "./component";
import { IContainerProps } from "./interfaces";
import { useSaveAdmin, useSnackbar, ISaveAdminInput, useTranslations } from "$hooks";
import { FormikHelpers } from "formik/dist/types";
import { Secretary } from "$interfaces/Secretary";

export const SaveAdminFormContainer: FunctionComponent<IContainerProps> = ({
  formName,
  onSubmit
}) => {
  const translations = useTranslations<ITranslations>("saveAdminForm");
  const { saveAdmin } = useSaveAdmin();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitAdmin = async (
    variables: ISaveAdminInput,
    { setSubmitting }: FormikHelpers<ISaveAdminInput>
  ) => {
    const result = await saveAdmin({
      variables,
      errorHandlers: {
        BadCredentialsError: () =>
          enqueueSnackbar(translations?.badCredentialsError, { variant: "error" }),
        AdminAlreadyExistsError: () =>
          enqueueSnackbar(translations?.adminAlreadyExistsError, { variant: "error" })
      }
    });

    if (result.error) return;
    onSubmit();
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
    }
  };

  return (
    <SaveAdminForm formName={formName} onSubmit={onSubmitAdmin} initialValues={initialValues} />
  );
};

interface ITranslations {
  badCredentialsError: string;
  adminAlreadyExistsError: string;
}

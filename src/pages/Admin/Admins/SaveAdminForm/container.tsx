import React, { FunctionComponent } from "react";
import { SaveAdminForm } from "./component";
import { IContainerProps } from "./interfaces";
import { useSaveAdmin, ISaveAdminInput, useTranslations, useShowError } from "$hooks";
import { FormikHelpers } from "formik/dist/types";
import { Secretary } from "$interfaces/Secretary";

export const SaveAdminFormContainer: FunctionComponent<IContainerProps> = ({
  formName,
  onSubmit,
  refetchGetAdmins
}) => {
  const translations = useTranslations<ITranslations>("saveAdminForm");
  const { saveAdmin } = useSaveAdmin();
  const showError = useShowError();

  const onSubmitAdmin = async (
    variables: ISaveAdminInput,
    { setSubmitting }: FormikHelpers<ISaveAdminInput>
  ) => {
    const result = await saveAdmin({
      variables,
      errorHandlers: {
        BadCredentialsError: () => showError({ message: translations?.badCredentialsError }),
        AdminAlreadyExistsError: () => showError({ message: translations?.adminAlreadyExistsError })
      }
    });

    if (result.error) return;
    if (refetchGetAdmins) await refetchGetAdmins({});
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

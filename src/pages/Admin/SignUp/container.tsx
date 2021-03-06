import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useSaveAdmin, useTranslations, useShowError } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { FiubaAuthenticationErrorHandler } from "$models/errorHandlers";

import { SignUp } from "./component";
import { Window } from "$components/Window";
import { Secretary } from "$interfaces/Secretary";
import { ITranslations, ISaveAdminForm } from "./interfaces";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("adminSignUp");
  const { saveAdmin } = useSaveAdmin();
  const showError = useShowError();

  const onSubmitAdmin = async ({ _form, ...variables }: ISaveAdminForm) => {
    const result = await saveAdmin({
      variables,
      errorHandlers: {
        BadCredentialsError: () => showError({ message: translations?.badCredentialsError }),
        AdminAlreadyExistsError: () =>
          showError({ message: translations?.adminAlreadyExistsError }),
        UserEmailAlreadyExistsError: () =>
          showError({ message: translations?.userEmailAlreadyExistsError }),
        ...FiubaAuthenticationErrorHandler(showError)
      }
    });

    if (result.error) return;
    history.push(RoutesBuilder.admin.admins());
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

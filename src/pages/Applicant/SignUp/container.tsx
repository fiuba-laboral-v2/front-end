import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { SignUp } from "./component";
import { useLogin, useSaveApplicant, useTranslations } from "$hooks";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { useSnackbar } from "notistack";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { handleValidationError } from "$models/errorHandlers/handleValidationError";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const saveApplicant = useSaveApplicant();
  const login = useLogin();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<ISignUpTranslations>("applicantSignUp");

  const validateForm = (values: ISignUpFormValues) => {
    const selectedCodes = values.careers.map(career => career.code);
    if (hasUniqueValues(selectedCodes)) {
      return "No se pueden repetir carreras";
    }
    if (selectedCodes.length === 0) {
      return "Debes elegir como mínimo una carrera";
    }
  };

  const onSubmit = async (
    {
      _form,
      user: {
        passwordConfirm,
        ...userAttributes
      },
      ...applicantValues
    }: ISignUpFormValues,
    {
      setSubmitting,
      setErrors
    }: FormikHelpers<ISignUpFormValues>
  ) => {
    const saveApplicantResult = await saveApplicant(
      {
        variables: { user: userAttributes, ...applicantValues },
        errorHandlers: formErrorHandlers({ enqueueSnackbar })({
          UserEmailAlreadyExistsError: handleValidationError(
            { enqueueSnackbar },
            () => setErrors({ user: { email: `Este email ya existe` } })
          )
        })
      }
    );
    if (saveApplicantResult.error) return;

    const loginResult = await login({
      variables: { email: userAttributes.email, password: userAttributes.password },
      errorHandlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.applicant.editMyProfile());
  };

  if (!translations) return <Fragment/>;

  return (
    <SignUp
      translations={translations}
      validateForm={validateForm}
      onSubmit={onSubmit}
    />
  );
};

export { SignUpContainer };

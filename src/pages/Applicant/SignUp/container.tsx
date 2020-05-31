import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { SignUp } from "./component";
import { Redirect } from "$components/Redirect";
import { useLogin, useSaveApplicant, useTranslations } from "$hooks";
import { Session } from "$models/Session";
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
        handlers: formErrorHandlers({ enqueueSnackbar })({
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
      handlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.applicant.editMyProfile());
  };

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <SignUp
      translations={translations.data}
      validateForm={validateForm}
      onSubmit={onSubmit}
    />
  );
};

export { SignUpContainer };

import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { SignUp } from "./component";
import { useFiubaLogin, useSaveApplicant, useTranslations } from "$hooks";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicantSignUpFormValues, IApplicantSignUpTranslations } from "./interfaces";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { handleValidationError } from "$models/errorHandlers/handleValidationError";
import { FiubaAuthenticationErrorHandler } from "$models/errorHandlers";
import { saveApplicantArguments } from "$models/MutationArguments";
import { Window } from "$components/Window";

export const SignUpContainer: FunctionComponent<ISignUpProps> = ({ searchQuery }) => {
  const history = useHistory();
  const { saveApplicant } = useSaveApplicant();
  const { login } = useFiubaLogin();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<IApplicantSignUpTranslations>("applicantSignUp");

  const validateForm = (values: IApplicantSignUpFormValues) => {
    const selectedCodes = values.careers.map(career => career.careerCode);
    if (hasUniqueValues(selectedCodes)) {
      return "No se pueden repetir carreras";
    }
    if (selectedCodes.length === 0) {
      return "Debes elegir como mínimo una carrera";
    }
  };

  const onSubmit = async (
    { _form, user, ...applicantValues }: IApplicantSignUpFormValues,
    { setSubmitting, setErrors }: FormikHelpers<IApplicantSignUpFormValues>
  ) => {
    const saveApplicantResult = await saveApplicant({
      variables: saveApplicantArguments({ user, ...applicantValues }),
      errorHandlers: formErrorHandlers({ enqueueSnackbar })({
        UserEmailAlreadyExistsError: handleValidationError({ enqueueSnackbar }, () =>
          setErrors({ user: { email: "Este email ya existe" } })
        ),
        ...FiubaAuthenticationErrorHandler({ enqueueSnackbar })
      })
    });
    if (saveApplicantResult.error) return;

    const loginResult = await login({
      variables: { dni: user.dni, password: user.password },
      errorHandlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.applicant.editMyProfile());
  };

  return (
    <Window withoutNavBar loading={!translations}>
      <SignUp
        translations={translations}
        validateForm={validateForm}
        onSubmit={onSubmit}
        initialDni={new URLSearchParams(searchQuery).get("dni")}
      />
    </Window>
  );
};

interface ISignUpProps {
  searchQuery: string;
}

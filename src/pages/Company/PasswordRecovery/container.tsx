import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useTranslations, useSendPasswordRecoveryEmail } from "$hooks";

import { PasswordRecovery } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";

export const PasswordRecoveryContainer: FunctionComponent = () => {
  const history = useHistory();
  const { sendPasswordRecoveryEmail } = useSendPasswordRecoveryEmail();
  const translations = useTranslations<ITranslations>("passwordRecovery");

  const onSubmit = async (
    variables: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ) => {
    const result = await sendPasswordRecoveryEmail({
      variables,
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
        UserNotFoundError: () => history.push(RoutesBuilder.public.forbidden())
      }
    });
    if (result.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.company.passwordRecoveryExplanation());
  };

  return (
    <Window alwaysHideNavbar>
      {!translations && <LoadingSpinner />}
      <PasswordRecovery
        hidden={!translations}
        translations={translations}
        onSubmit={onSubmit}
        initialValues={{ email: "", _form: "" }}
      />
    </Window>
  );
};

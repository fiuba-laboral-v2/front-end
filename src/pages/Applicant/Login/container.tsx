import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { LogIn } from "./component";

import { ITranslations } from "./interfaces";
import { FormikHelpers } from "formik";

export const LogInContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("login");
  const history = useHistory();

  if (!translations) return <Fragment />;

  const onSubmit = async (
    _: { dni: string; password: string },
    { setSubmitting }: FormikHelpers<{ dni: string; password: string }>,
    __: ErrorHandlers
  ) => {
    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return <LogIn translations={translations} onSubmit={onSubmit} />;
};

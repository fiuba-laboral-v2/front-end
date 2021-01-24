import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useUpdateCompanyUser, useTranslations, useMyCompanyUser, useShowError } from "$hooks";

import { EditCompanyUser } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";

export const EditCompanyUserContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const companyUser = useMyCompanyUser();
  const { updateCompanyUser } = useUpdateCompanyUser();

  const translations = useTranslations<ITranslations>("editCompanyUser");

  const onSubmit = useCallback(
    async (
      { _form, ...variables }: IFormValues,
      { setErrors, setSubmitting }: FormikHelpers<IFormValues>
    ) => {
      const result = await updateCompanyUser({
        variables,
        errorHandlers: createCompanyErrorHandlers({ setErrors, showError })
      });
      if (result.error) return;
      setSubmitting(false);
      history.push(RoutesBuilder.company.users());
    },
    [showError, history, updateCompanyUser]
  );

  const modelToValues = useCallback(
    (model?: ICompanyUser) => ({
      user: {
        uuid: model?.user.uuid || "",
        email: model?.user.email || "",
        name: model?.user.name || "",
        surname: model?.user.surname || "",
        position: model?.position || ""
      },
      _form: ""
    }),
    []
  );

  return (
    <Window>
      {!translations && <LoadingSpinner />}
      <EditCompanyUser
        hidden={!translations}
        translations={translations}
        onSubmit={onSubmit}
        modelToValues={modelToValues}
        initialValuesModel={companyUser}
      />
    </Window>
  );
};

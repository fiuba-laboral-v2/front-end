import React, { FunctionComponent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import {
  useTranslations,
  useUpdateCompanyCriticalAttributes,
  useMyCompanyProfile,
  useShowError
} from "$hooks";

import { EditCriticalAttributes } from "./component";
import { Window } from "$components/Window";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { IFormValues, ITranslations } from "./interfaces";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$models/errorHandlers";

export const EditCriticalAttributesContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const company = useMyCompanyProfile();
  const { updateCompanyCriticalAttributes } = useUpdateCompanyCriticalAttributes();
  const translations = useTranslations<ITranslations>("editCompanyCriticalAttributes");
  const confirmDialogTranslations = useTranslations<IConfirmDialogTranslations>(
    "editCuitAndBusinessNameConfirmDialog"
  );

  const onSubmit = useCallback(
    async (
      { _form, ...variables }: IFormValues,
      { setSubmitting, setErrors }: FormikHelpers<IFormValues>
    ) => {
      const result = await updateCompanyCriticalAttributes({
        variables,
        errorHandlers: createCompanyErrorHandlers({ setErrors, showError })
      });
      if (result.error) return;
      setSubmitting(false);
      history.push(RoutesBuilder.company.myProfile());
    },
    [history, updateCompanyCriticalAttributes, showError]
  );

  const modelToValues = useCallback(
    (model?: ICompany) => ({
      cuit: model?.cuit || "NaN",
      businessName: model?.businessName || "",
      hasAnInternshipAgreement: model?.hasAnInternshipAgreement || false,
      _form: ""
    }),
    []
  );

  const loading = !translations || !company;

  return (
    <Window loading={loading}>
      <EditCriticalAttributes
        confirmDialogIsOpen={confirmDialogIsOpen}
        setConfirmDialogIsOpen={setConfirmDialogIsOpen}
        translations={translations}
        confirmDialogTranslations={confirmDialogTranslations}
        onSubmit={onSubmit}
        modelToValues={modelToValues}
        initialValuesModel={company}
      />
    </Window>
  );
};

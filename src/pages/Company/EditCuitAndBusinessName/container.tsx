import React, { FunctionComponent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import {
  useTranslations,
  useUpdateCompanyCriticalAttributes,
  useMyCompanyProfile,
  useSnackbar
} from "$hooks";

import { EditCuitAndBusinessName } from "./component";
import { Window } from "$components/Window";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { IFormValues, ITranslations } from "./interfaces";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$models/errorHandlers";

export const EditCuitAndBusinessNameContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const company = useMyCompanyProfile();
  const { updateCompanyCriticalAttributes } = useUpdateCompanyCriticalAttributes();
  const translations = useTranslations<ITranslations>("editCuitAndBusinessName");
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
        errorHandlers: createCompanyErrorHandlers({ setErrors, enqueueSnackbar })
      });
      if (result.error) return;
      setSubmitting(false);
      history.push(RoutesBuilder.company.myProfile());
    },
    [history, updateCompanyCriticalAttributes, enqueueSnackbar]
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
      <EditCuitAndBusinessName
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

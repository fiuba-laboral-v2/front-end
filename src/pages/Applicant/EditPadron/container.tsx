import React, { FunctionComponent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useTranslations, useUpdatePadron, useMyApplicantProfile } from "$hooks";

import { EditPadron } from "./component";
import { Window } from "$components/Window";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { IFormValues, ITranslations } from "./interfaces";
import { IApplicant } from "$interfaces/Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const EditPadronContainer: FunctionComponent = () => {
  const history = useHistory();
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const applicant = useMyApplicantProfile();
  const { updatePadron } = useUpdatePadron();
  const translations = useTranslations<ITranslations>("editPadron");
  const confirmDialogTranslations = useTranslations<IConfirmDialogTranslations>(
    "editPadronConfirmDialog"
  );

  const onSubmit = useCallback(
    async ({ padron }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      const result = await updatePadron({ variables: { padron } });
      if (result.error) return;
      setSubmitting(false);
      history.push(RoutesBuilder.applicant.myProfile());
    },
    []
  );

  const modelToValues = useCallback(
    (model?: IApplicant) => ({ padron: model?.padron || NaN, _form: "" }),
    []
  );

  const loading = !translations || !applicant;

  return (
    <Window loading={loading}>
      <EditPadron
        confirmDialogIsOpen={confirmDialogIsOpen}
        setConfirmDialogIsOpen={setConfirmDialogIsOpen}
        translations={translations}
        confirmDialogTranslations={confirmDialogTranslations}
        onSubmit={onSubmit}
        modelToValues={modelToValues}
        initialValuesModel={applicant}
      />
    </Window>
  );
};

import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useTranslations, useUpdatePadron, useMyApplicantProfile } from "$hooks";

import { EditPadron } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const EditPadronContainer: FunctionComponent = () => {
  const history = useHistory();
  const applicant = useMyApplicantProfile();
  const { updatePadron } = useUpdatePadron();
  const translations = useTranslations<ITranslations>("editPadron");

  const onSubmit = async (
    { padron }: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ) => {
    const result = await updatePadron({ variables: { padron } });
    if (result.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.applicant.myProfile());
  };

  return (
    <Window>
      {!translations && <LoadingSpinner />}
      <EditPadron
        hidden={!translations}
        translations={translations}
        onSubmit={onSubmit}
        initialValues={{
          padron: applicant?.padron || NaN,
          _form: ""
        }}
      />
    </Window>
  );
};

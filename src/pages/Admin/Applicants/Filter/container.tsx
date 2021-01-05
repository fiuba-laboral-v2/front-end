import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useMyApplicantProfile, useUpdatePadron } from "$hooks";

import { Filter } from "./component";
import { Window } from "$components/Window";

import { IFormValues } from "./interfaces";
import { ApplicantType } from "$interfaces/Applicant";

export const FilterContainer: FunctionComponent = () => {
  const history = useHistory();
  const applicant = useMyApplicantProfile();
  const { updatePadron } = useUpdatePadron();

  const onSubmit = useCallback(
    async (_: IFormValues, __: FormikHelpers<IFormValues>) => undefined,
    [history, updatePadron]
  );

  const loading = !applicant;

  return (
    <Window loading={loading}>
      <Filter
        onSubmit={onSubmit}
        initialValues={{
          _form: "",
          careerCodes: [],
          name: "",
          applicantType: ApplicantType.student
        }}
      />
    </Window>
  );
};

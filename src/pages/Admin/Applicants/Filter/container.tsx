import React, { FunctionComponent, useCallback } from "react";
import { FormikHelpers } from "formik";

import { Filter } from "./component";

import { IFormValues, IContainerProps } from "./interfaces";
import { ApplicantType } from "$interfaces/Applicant";

export const FilterContainer: FunctionComponent<IContainerProps> = () => {
  const onSubmit = useCallback(
    async (_: IFormValues, __: FormikHelpers<IFormValues>) => undefined,
    []
  );

  return (
    <Filter
      onSubmit={onSubmit}
      initialValues={{
        _form: "",
        careerCodes: [],
        name: "",
        applicantType: ApplicantType.student
      }}
    />
  );
};

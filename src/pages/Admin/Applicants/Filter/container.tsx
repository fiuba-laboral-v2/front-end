import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers } from "$hooks";
import { FormikHelpers } from "formik";

import { Filter } from "./component";

import { IContainerProps, IFormValues } from "./interfaces";
import { ApplicantType } from "$interfaces/Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const FilterContainer: FunctionComponent<IContainerProps> = ({ filter }) => {
  const history = useHistory();
  const careers = useCareers();

  const onSubmit = useCallback(
    async ({ _form, ...values }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setSubmitting(false);
      filter.setValues({ ...values, careerCodes: values.careers?.map(({ code }) => code) });
      const searchParams = filter.toString();
      return history.push(RoutesBuilder.admin.applicants({ searchParams }));
    },
    [filter, history]
  );

  const getCareers = () => {
    const careerCodes = filter.getCareerCodes();
    if (!careers) return;
    if (!careerCodes) return;
    return careerCodes.map(careerCode => {
      const career = careers.find(({ code }) => code === careerCode);
      if (!career) throw new Error(`No career for code: ${careerCode}`);
      return career;
    });
  };

  return (
    <Filter
      onSubmit={onSubmit}
      initialValues={{
        _form: "",
        careers: getCareers(),
        name: filter.getName() || "",
        applicantType: filter.getApplicantType() || ApplicantType.graduate
      }}
    />
  );
};

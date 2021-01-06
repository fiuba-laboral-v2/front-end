import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ApplicantsFilter } from "$models/ApplicantsFilter";
import { FormikHelpers } from "formik";

import { Filter } from "./component";

import { IContainerProps, IFormValues, ITranslations } from "./interfaces";
import { ApplicantType } from "$interfaces/Applicant";

export const FilterContainer: FunctionComponent<IContainerProps> = ({
  filter,
  refetchApplicants
}) => {
  const translations = useTranslations<ITranslations>("applicantsFilter");
  const history = useHistory();
  const careers = useCareers();

  const onSubmit = useCallback(
    async ({ _form, ...values }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setSubmitting(false);
      filter.setValues({ ...values, careerCodes: values.careers.map(({ code }) => code) });
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.applicants({ searchParams }));
      if (refetchApplicants) refetchApplicants(filter.getValues());
    },
    [filter, history, refetchApplicants]
  );

  const modelToValues = useCallback(
    (model?: ApplicantsFilter) => {
      const getCareers = () => {
        const careerCodes = model?.getCareerCodes();
        if (!careers) return [];
        if (!careerCodes) return [];
        return careerCodes.map(careerCode => {
          const career = careers.find(({ code }) => code === careerCode);
          if (!career) throw new Error(`No career for code: ${careerCode}`);
          return { code: career.code, description: career.description };
        });
      };

      return {
        careers: getCareers(),
        name: model?.getName() || "",
        applicantType: model?.getApplicantType() || ApplicantType.graduate,
        _form: ""
      };
    },
    [careers]
  );

  return (
    <Filter
      translations={translations}
      onSubmit={onSubmit}
      modelToValues={modelToValues}
      initialValuesModel={filter}
    />
  );
};

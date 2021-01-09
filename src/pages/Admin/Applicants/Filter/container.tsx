import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ApplicantsFilter } from "$models/SearchFilters/ApplicantsFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues } from "./interfaces";
import { ApplicantType } from "$interfaces/Applicant";

import { NameField } from "$components/Fields/NameField";
import { CareerSelector } from "$components/CareerSelector";
import { ApplicantTypeSelector } from "$components/ApplicantTypeSelector";
import { Filter } from "../../components/Filter";

import styles from "./styles.module.scss";

export const FilterContainer: FunctionComponent<IContainerProps> = ({
  showFilter,
  filter,
  refetchApplicants
}) => {
  const translations = useTranslations<{ name: string }>("applicantsFilter");
  const history = useHistory();
  const careers = useCareers();

  const onSubmit = useCallback(
    async (
      { _form, applicantType, ...values }: IFormValues,
      { setSubmitting }: FormikHelpers<IFormValues>
    ) => {
      setSubmitting(false);
      filter.setValues({
        ...values,
        careerCodes: values.careers.map(({ code }) => code),
        applicantType: applicantType === "" ? undefined : applicantType
      });
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.applicants({ searchParams }));
      if (refetchApplicants) refetchApplicants(filter.getValues());
    },
    [filter, history, refetchApplicants]
  );

  const modelToValues = useCallback(
    (model?: ApplicantsFilter): IFormValues => {
      const getCareers = () => {
        const careerCodes = model?.getCareerCodes();
        if (!careers) return [];
        if (!careerCodes) return [];
        return careerCodes.map(careerCode => {
          const career = careers.find(({ code }) => code === careerCode);
          return { code: careerCode, description: career?.description || "" };
        });
      };

      return {
        careers: getCareers(),
        name: model?.getName() || "",
        applicantType: model?.getApplicantType() || "",
        _form: ""
      };
    },
    [careers]
  );

  return (
    <Filter
      showFilter={showFilter}
      initialValuesModel={filter}
      modelToValues={modelToValues as any}
      onSubmit={onSubmit}
    >
      {translations && (
        <NameField className={styles.name} name="name" label={translations.name} withoutMargin />
      )}
      <CareerSelector className={styles.careers} name="careers" />
      <ApplicantTypeSelector
        className={styles.applicantType}
        name="applicantType"
        excludedOptions={[ApplicantType.both]}
      />
    </Filter>
  );
};

import React, { Fragment, FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ApplicantsFilter } from "$models/SearchFilters/ApplicantsFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues, ITranslations } from "./interfaces";
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
  const translations = useTranslations<ITranslations>("applicantsFilter");
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
        applicantType: applicantType === "indeterminate" ? undefined : applicantType
      });
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.applicants({ searchParams }));
      if (refetchApplicants) refetchApplicants(filter.getValues());
    },
    [filter, history, refetchApplicants]
  );

  if (!careers) return <Fragment />;

  const modelToValues = (model?: ApplicantsFilter): IFormValues => {
    const careerCodes = model?.getCareerCodes();
    return {
      careers: (careerCodes || []).map(careerCode => {
        const career = (careers || []).find(({ code }) => code === careerCode);
        return { code: careerCode, description: career?.description || "" };
      }),
      name: model?.getName() || "",
      applicantType: model?.getApplicantType() || "indeterminate",
      _form: ""
    };
  };

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
        additionalOptions={["indeterminate"]}
        className={styles.applicantType}
        label={translations?.applicantType}
        name="applicantType"
        excludedOptions={[ApplicantType.both]}
      />
    </Filter>
  );
};

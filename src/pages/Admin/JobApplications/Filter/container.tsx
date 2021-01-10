import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { JobApplicationsFilter } from "$models/SearchFilters/JobApplicationsFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues, ITranslations } from "./interfaces";

import { NameField } from "$components/Fields/NameField";
import { Filter } from "../../components/Filter";

import styles from "./styles.module.scss";

export const FilterContainer: FunctionComponent<IContainerProps> = ({
  showFilter,
  filter,
  refetchJobApplications
}) => {
  const translations = useTranslations<ITranslations>("jobApplicationsFilter");
  const history = useHistory();

  const onSubmit = useCallback(
    async ({ _form, ...variables }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setSubmitting(false);
      filter.setValues(variables);
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.jobApplications({ searchParams }));
      if (refetchJobApplications) refetchJobApplications(filter.getValues());
    },
    [filter, history, refetchJobApplications]
  );

  const modelToValues = useCallback(
    (model?: JobApplicationsFilter): IFormValues => ({
      companyName: model?.getCompanyName() || "",
      applicantName: model?.getApplicantName() || "",
      offerTitle: model?.getOfferTitle() || "",
      _form: ""
    }),
    []
  );

  return (
    <Filter
      showFilter={showFilter}
      initialValuesModel={filter}
      modelToValues={modelToValues as any}
      onSubmit={onSubmit}
    >
      {translations && (
        <>
          <NameField
            className={styles.name}
            name="companyName"
            label={translations.companyName}
            withoutMargin
          />
          <NameField
            className={styles.name}
            name="applicantName"
            label={translations.applicantName}
            withoutMargin
          />
          <NameField
            className={styles.name}
            name="offerTitle"
            label={translations.offerTitle}
            withoutMargin
          />
        </>
      )}
    </Filter>
  );
};

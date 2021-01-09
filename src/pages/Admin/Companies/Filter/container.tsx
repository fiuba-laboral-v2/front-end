import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { CompaniesFilter } from "$models/SearchFilters/CompaniesFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues, ITranslations } from "./interfaces";

import { NameField } from "$components/Fields/NameField";
import { Filter } from "../../components/Filter";

import styles from "./styles.module.scss";

export const FilterContainer: FunctionComponent<IContainerProps> = ({
  showFilter,
  filter,
  refetchCompanies
}) => {
  const translations = useTranslations<ITranslations>("companiesFilter");
  const history = useHistory();

  const onSubmit = useCallback(
    async ({ _form, ...variables }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setSubmitting(false);
      filter.setValues(variables);
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.companies({ searchParams }));
      if (refetchCompanies) refetchCompanies(filter.getValues());
    },
    [filter, history, refetchCompanies]
  );

  const modelToValues = useCallback(
    (model?: CompaniesFilter): IFormValues => ({
      companyName: model?.getCompanyName() || "",
      businessSector: model?.getBusinessSector() || "",
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
            label={translations.businessSector}
            withoutMargin
          />
        </>
      )}
    </Filter>
  );
};

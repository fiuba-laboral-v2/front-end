import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues, ITranslations } from "./interfaces";

import { NameField } from "$components/Fields/NameField";
import { Filter } from "../../components/Filter";
import { CareerSelector } from "$components/CareerSelector";
import { ApprovalStatusSelector } from "$components/ApprovalStatusSelector";

import styles from "./styles.module.scss";

export const FilterContainer: FunctionComponent<IContainerProps> = ({
  showFilter,
  filter,
  refetchOffers
}) => {
  const translations = useTranslations<ITranslations>("offersFilter");
  const history = useHistory();
  const careers = useCareers();

  const onSubmit = useCallback(
    async ({ _form, ...values }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
      setSubmitting(false);
      filter.setValues({
        ...values,
        approvalStatus: values.approvalStatus === "" ? undefined : values.approvalStatus,
        careerCodes: values.careers.map(({ code }) => code)
      });
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.offers({ searchParams }));
      if (refetchOffers) refetchOffers(filter.getValues());
    },
    [filter, history, refetchOffers]
  );

  const modelToValues = useCallback(
    (model?: OffersFilter): IFormValues => {
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
        companyName: model?.getCompanyName() || "",
        businessSector: model?.getBusinessSector() || "",
        title: model?.getTitle() || "",
        approvalStatus: model?.getApprovalStatus() || "",
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
        <>
          <NameField
            className={styles.name}
            name="companyName"
            label={translations.companyName}
            withoutMargin
          />
          <NameField
            className={styles.name}
            name="businessSector"
            label={translations.businessSector}
            withoutMargin
          />
          <NameField
            className={styles.name}
            name="title"
            label={translations.title}
            withoutMargin
          />
          <CareerSelector className={styles.careers} name="careers" />
          <ApprovalStatusSelector className={styles.status} name="approvalStatus" withEmptyOption />
        </>
      )}
    </Filter>
  );
};

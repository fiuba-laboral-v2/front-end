import React, { Fragment, FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCareers, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { FormikHelpers } from "formik";
import { IContainerProps, IFormValues, ITranslations } from "./interfaces";

import { NameField } from "$components/Fields/NameField";
import { Filter } from "../../components/Filter";
import { CareerSelector } from "$components/CareerSelector";
import { OfferStatusSelector } from "$components/OfferStatusSelector";

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
      filter.setValues({
        ...values,
        studentsStatus:
          values.studentsStatus === "indeterminate" ? undefined : values.studentsStatus,
        graduatesStatus:
          values.graduatesStatus === "indeterminate" ? undefined : values.graduatesStatus,
        careerCodes: values.careers.map(({ code }) => code)
      });
      const searchParams = filter.toString();
      history.push(RoutesBuilder.admin.offers({ searchParams }));
      if (refetchOffers) refetchOffers(filter.getValues());
      setSubmitting(false);
    },
    [filter, history, refetchOffers]
  );

  if (!careers) return <Fragment />;

  const modelToValues = (model?: OffersFilter): IFormValues => {
    const careerCodes = model?.getCareerCodes();
    return {
      careers: (careerCodes || []).map(careerCode => {
        const career = (careers || []).find(({ code }) => code === careerCode);
        return { code: careerCode, description: career?.description || "" };
      }),
      companyName: model?.getCompanyName() || "",
      businessSector: model?.getBusinessSector() || "",
      title: model?.getTitle() || "",
      studentsStatus: model?.getStudentsStatus() || "indeterminate",
      graduatesStatus: model?.getGraduatesStatus() || "indeterminate",
      _form: ""
    };
  };

  return (
    <Filter
      showFilter={showFilter}
      initialValuesModel={filter}
      modelToValues={modelToValues as any}
      onSubmit={onSubmit}
      formFooterClassName={styles.formFooter}
    >
      {translations && (
        <div className={styles.filterContainer}>
          <div className={styles.firstRow}>
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
          </div>
          <div className={styles.secondRow}>
            <CareerSelector className={styles.careers} name="careers" />
            <OfferStatusSelector
              className={styles.status}
              name="graduatesStatus"
              target="graduates"
              additionalOptions={["indeterminate"]}
            />
            <OfferStatusSelector
              className={styles.status}
              name="studentsStatus"
              target="students"
              additionalOptions={["indeterminate"]}
            />
          </div>
        </div>
      )}
    </Filter>
  );
};

import React, { FunctionComponent, useCallback } from "react";
import { IEditOfferContainerProps } from "./interfaces";
import { EditOffer } from "./component";
import { useTranslations } from "$hooks/queries";
import { ICreateOfferValues, IOffer } from "$interfaces/Offer";
import { isNil } from "lodash";
import { validateSalaryRange } from "validations-fiuba-laboral-v2";

export const EditOfferContainer: FunctionComponent<IEditOfferContainerProps> = ({
  loading,
  ...props
}) => {
  const acceptanceCriteria = useTranslations<{ text: string }>("editOfferAcceptanceCriteria");

  const modelToValues = useCallback((model?: IOffer) => {
    const values: ICreateOfferValues = {
      title: model?.title || "",
      description: model?.description || "",
      targetApplicantType: model?.targetApplicantType || "",
      hoursPerDay: model?.hoursPerDay || NaN,
      minimumSalary: model?.minimumSalary || NaN,
      maximumSalary: model?.maximumSalary || NaN,
      isInternship: model?.isInternship || false,
      careers: model?.careers || [],
      sections: model?.sections || [],
      _form: []
    };
    return values;
  }, []);

  const validateForm = useCallback((values: ICreateOfferValues) => {
    if (isNil(values.maximumSalary)) return;
    if (isNaN(values.minimumSalary) || isNaN(values.maximumSalary)) return;
    try {
      validateSalaryRange(values.minimumSalary, values.maximumSalary);
    } catch ({ message }) {
      return { _form: message };
    }
  }, []);

  return (
    <EditOffer
      acceptanceCriteria={acceptanceCriteria?.text}
      {...{ modelToValues, validateForm }}
      {...props}
      loading={loading || !acceptanceCriteria?.text}
    />
  );
};

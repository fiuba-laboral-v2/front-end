import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { JobSpecs } from "./component";
import { IContainerProps, ISalary, ITranslation } from "./interfaces";

export const JobSpecsContainer: FunctionComponent<IContainerProps> = ({ salary, ...props }) => {
  const translations = useTranslations<ITranslation>("jobSpecs");
  if (!translations) return <Fragment />;

  const setSalaryItem = ({ minimumSalary, maximumSalary }: ISalary) =>
    maximumSalary ? `${minimumSalary} - ${maximumSalary}` : `${minimumSalary}`;

  return <JobSpecs translations={translations} salary={setSalaryItem(salary)} {...props} />;
};

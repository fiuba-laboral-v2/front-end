import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "../ApprovableTypeTab";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { ITypeFilterProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";
export const TypeFilter: FunctionComponent<ITypeFilterProps> = (
  {
    translations,
    types,
    toggleType
  }
) => (
  <>
    <ApprovableTypeTab
      Icon={CompanyIcon}
      iconTitle={translations.companyIconTitle}
      types={types}
      type={COMPANY}
      onClick={toggleType}
    />
    <ApprovableTypeTab
      Icon={ApplicantIcon}
      iconTitle={translations.companyIconTitle}
      types={types}
      type={APPLICANT}
      onClick={toggleType}
    />
  </>
);

import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "../ApprovableTypeTab";
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
      iconTitle={translations.companyIconTitle}
      types={types}
      type={COMPANY}
      onClick={toggleType}
    />
    <ApprovableTypeTab
      iconTitle={translations.companyIconTitle}
      types={types}
      type={APPLICANT}
      onClick={toggleType}
    />
  </>
);

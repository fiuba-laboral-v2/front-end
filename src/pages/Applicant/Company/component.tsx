import React, { FunctionComponent } from "react";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { ICompany } from "$interfaces/Company";

export const CompanyProfile: FunctionComponent<ICompanyProfile> = ({ company }) => (
  <Window>
    <CompanyDetail company={company} />
  </Window>
);

interface ICompanyProfile {
  company: ICompany;
}

import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { ICompany } from "$interfaces/Company";

export const Profile: FunctionComponent<IProfile> = ({ company }) => (
  <Window>
    <Title/>
    <CompanyDetail company={company}/>
  </Window>
);

interface IProfile {
  company: ICompany;
}

import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { Actions } from "./Actions";
import { ICompany } from "$interfaces/Company";

export const Profile: FunctionComponent<IProfile> = ({ company }) => (
  <Window loading={!company}>
    <Title />
    <CompanyDetail company={company} withStatusLabel withInvalidPhotos>
      <Actions />
    </CompanyDetail>
  </Window>
);

interface IProfile {
  company?: ICompany;
}

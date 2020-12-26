import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { Button } from "$components/Button";
import { ICompany } from "$interfaces/Company";
import { IProfileTranslations } from "./interfaces";

export const Profile: FunctionComponent<IProfile> = ({ company, onClickEdit, translations }) => (
  <Window loading={!company || !translations}>
    <Title />
    <CompanyDetail company={company} withStatusLabel>
      <Button kind="primary" onClick={onClickEdit}>
        {translations?.edit}
      </Button>
    </CompanyDetail>
  </Window>
);

interface IProfile {
  company?: ICompany;
  onClickEdit: () => void;
  translations?: IProfileTranslations;
}

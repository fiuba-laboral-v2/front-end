import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { Button } from "$components/Button";
import { ICompany } from "$interfaces/Company";
import { IProfileTranslations } from "./interface";

export const Profile: FunctionComponent<IProfile> = ({ company, onClickEdit, translations }) => (
  <Window>
    <Title />
    <CompanyDetail
      company={company}
      editButton={
        <Button kind="primary" onClick={onClickEdit}>
          {translations.edit}
        </Button>
      }
      withStatusLabel
    />
  </Window>
);

interface IProfile {
  company: ICompany;
  onClickEdit: () => void;
  translations: IProfileTranslations;
}

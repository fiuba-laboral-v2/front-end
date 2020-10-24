import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import { Button } from "$components/Button";
import { ICompany } from "$interfaces/Company";
import { IProfileTranslations } from "./interface";
import { LoadingWindow } from "$components/LoadingWindow";

export const Profile: FunctionComponent<IProfile> = ({ company, onClickEdit, translations }) => {
  if (!company || !translations) return <LoadingWindow />;

  return (
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
};

interface IProfile {
  company?: ICompany;
  onClickEdit: () => void;
  translations?: IProfileTranslations;
}

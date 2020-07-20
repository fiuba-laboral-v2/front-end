import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyDetail } from "$components/CompanyDetail";
import { Window } from "$components/Window";
import Button from "$components/Button";
import { StatusLabel } from "../../../components/StatusLabel";
import { ICompany } from "$interfaces/Company";
import { IProfileTranslations } from "./interface";

export const Profile: FunctionComponent<IProfile> = (
  {
    company,
    onClickEdit,
    translations
  }
) => (
  <Window>
    <Title/>
    <CompanyDetail
      company={company}
      editButton={
        <Button className={"primary"} onClick={onClickEdit}>{translations.edit}</Button>
      }
      statusLabel={
        <StatusLabel status={company.approvalStatus} useTooltip={false} />
      }
    />
  </Window>
);

interface IProfile {
  company: ICompany;
  onClickEdit: () => void;
  translations: IProfileTranslations;
}

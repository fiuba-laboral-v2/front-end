import React, { FunctionComponent } from "react";
import { Window } from "$models/Window";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useParams, useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";

import { CompanyDetailContent, CompanyDetailInfo } from "../components/Company";
import { Window as WindowComponent } from "$components/Window";
import { Button } from "$components/Button";

import styles from "./styles.module.scss";

export const CompanyDetail: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("adminCompanyDetail");
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <WindowComponent>
      <CompanyDetailInfo selectedTaskUuid={uuid} onStatusUpdate={Window.reload} />
      <CompanyDetailContent className={styles.content} companyUuid={uuid}>
        <Button kind="primary" onClick={() => history.push(RoutesBuilder.admin.companyUsers(uuid))}>
          {translations?.seeUsersButton}
        </Button>
      </CompanyDetailContent>
    </WindowComponent>
  );
};

interface ITranslations {
  seeUsersButton: string;
}

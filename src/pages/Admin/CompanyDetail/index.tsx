import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useParams } from "react-router-dom";
import { useTranslations } from "$hooks";

import { CompanyDetailContent, CompanyDetailInfo } from "../components/Company";
import { Window } from "$components/Window";
import { Button } from "$components/Button";

import styles from "./styles.module.scss";

export const CompanyDetail: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminCompanyDetail");
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <Window desktopOnly>
      <CompanyDetailInfo selectedTaskUuid={uuid} />
      <CompanyDetailContent className={styles.content} companyUuid={uuid}>
        <Button
          kind="primary"
          link={RoutesBuilder.admin.companyUsers(uuid)}
          className={styles.seeUsersButton}
        >
          {translations?.seeUsersButton}
        </Button>
      </CompanyDetailContent>
    </Window>
  );
};

interface ITranslations {
  seeUsersButton: string;
}

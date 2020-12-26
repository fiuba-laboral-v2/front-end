import React, { FunctionComponent } from "react";
import { Window } from "$models/Window";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

import { CompanyDetailContent, CompanyDetailInfo } from "../components/Company";
import { Window as WindowComponent } from "$components/Window";

export const CompanyDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <WindowComponent>
      <CompanyDetailInfo selectedTaskUuid={uuid} onStatusUpdate={Window.reload} />
      <CompanyDetailContent className={styles.content} companyUuid={uuid} />
    </WindowComponent>
  );
};

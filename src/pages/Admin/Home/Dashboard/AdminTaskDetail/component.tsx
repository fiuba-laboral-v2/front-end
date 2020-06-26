import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./CompanyDetailContent";
import { CompanyDetailInfo } from "./CompanyDetailInfo";
import { Description } from "$components/Description";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { IAdminTaskDetailProps } from "./interfaces";
import styles from "./styles.module.scss";

export const AdminTaskDetail: FunctionComponent<IAdminTaskDetailProps> = (
  {
    selectedTask,
    translations
  }
) => <>
  <div className={styles.info}>
    {
      selectedTask?.__typename === "Company" &&
      <CompanyDetailInfo selectedCompany={selectedTask}/>
    }
  </div>
  <div className={styles.content}>
    {
      !selectedTask &&
      <div className={styles.emptyContentDetail}>
          <ArrowBackIcon className={styles.selectToStartArrow}/>
          <Description className={styles.description}>{translations.selectToStart}</Description>
      </div>
    }
    {
      selectedTask?.__typename === "Company" &&
      <CompanyDetailContent selectedCompany={selectedTask}/>
    }
  </div>
</>;

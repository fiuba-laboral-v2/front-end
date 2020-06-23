import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApprovable } from "$interfaces/Approvable";
import { CompanyDetailContent } from "./CompanyDetailContent";

export const AdminTaskDetail: FunctionComponent<IAdminTaskDetailProps> = (
  { selectedTask }
) => {
  let content;
  if (!selectedTask) {
    content = <div>seleccionate una</div>;
  } else if (selectedTask.__typename === "Company") {
    content = (<CompanyDetailContent selectedCompany={selectedTask}/>);
  }
  return (
    <>
      <div className={styles.info}></div>
      <div className={styles.content}>{content}</div>
    </>
  );
};

interface IAdminTaskDetailProps {
  selectedTask?: IApprovable;
}

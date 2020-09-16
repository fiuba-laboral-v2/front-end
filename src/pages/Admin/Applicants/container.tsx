import React, { FunctionComponent } from "react";
import { ListPageContainer } from "../components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import styles from "./styles.module.scss";
import { IApplicant } from "$interfaces/Applicant";
import { useApplicants } from "$hooks";

export const Applicants: FunctionComponent<IApplicants> = () => {
  const result = useApplicants();
  const applicants = result?.data?.getApplicants;

  return (
    <>
    {
      applicants &&
      <ListPageContainer
        titleTranslationPath={"adminApplicantListMainTitle"}
        listHeader={<ListHeader />}
        listContentItem={(applicant: IApplicant) => <ListContentItem applicant={applicant}/>}
        listHeaderClassName={styles.tableDisplay}
        rowClassName={styles.tableDisplay}
        items={applicants}
      />
    }
  </>
  );
};

interface IApplicants {
  translations: {
    title: string;
    subtitle: string;
  };
}

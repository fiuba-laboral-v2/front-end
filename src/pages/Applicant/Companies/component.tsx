import React, { FunctionComponent } from "react";
import { ClickableCard } from "$components/ClickableCard";
import { Subtitle } from "$components/Subtitle";
import { CompanyLogo } from "$components/CompanyLogo";
import { ListTitle } from "$components/ListTitle";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Window } from "$components/Window";
import { ICompany } from "$interfaces/Company";
import styles from "./styles.module.scss";

export const Companies: FunctionComponent<ICompaniesProps> = (
  {
    companies,
    onClickView,
    loading
  }) => {
  if (loading) {
    return (
      <Window>
        <ListTitle titleTranslationPath={"companiesList"}/>
        <LoadingSpinner/>
      </Window>
    );
  }

  return (
    <Window>
      <ListTitle titleTranslationPath={"companiesList"}/>
      {
        companies.map(company =>
          <ClickableCard
            key={company.uuid}
            className={styles.row}
            onClick={() => onClickView(company.uuid)}>
            <div className={styles.childrenContainer}>
              <CompanyLogo
                className={styles.companyLogo}
                size="small"
                companyName={company.companyName}
                logo={company.logo}
              />
              <Subtitle className={styles.name}>{company.companyName}</Subtitle>
            </div>
          </ClickableCard>
        )
      }
    </Window>
  );
};

interface ICompaniesProps {
  companies: ICompany[];
  onClickView: (uuid: string) => void;
  loading: boolean;
}

import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import { CompanyLogo } from "$components/CompanyLogo";
import { ListTitle } from "$components/ListTitle";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { EmptyList } from "$components/EmptyList";
import { Window } from "$components/Window";
import { ICompany } from "$interfaces/Company";
import styles from "./styles.module.scss";

export const Companies: FunctionComponent<ICompaniesProps> = ({
  companies,
  onClickView,
  loading
}) => {
  if (loading) {
    return (
      <Window>
        <ListTitle titleTranslationPath={"companiesList"} />
        <LoadingSpinner />
      </Window>
    );
  }

  return (
    <Window>
      <ListTitle titleTranslationPath={"companiesList"} />
      {companies.length > 0 &&
        companies.map(company => (
          <Card key={company.uuid} className={styles.row} onClick={() => onClickView(company.uuid)}>
            <div className={styles.childrenContainer}>
              <CompanyLogo
                className={styles.companyLogo}
                size="large"
                companyName={company.companyName}
                logo={company.logo}
                useDefaultIcon
              />
              <Subtitle className={styles.name}>{company.companyName}</Subtitle>
            </div>
          </Card>
        ))}
      {companies.length === 0 && (
        <div className={styles.emptyListContainer}>
          <EmptyList
            emptyTranslationSource="applicantEmptyCompaniesList"
            buttonKind="secondary"
            onClick={() => {
              // sacar los filtros cuando hayan
            }}
          />
        </div>
      )}
    </Window>
  );
};

interface ICompaniesProps {
  companies: ICompany[];
  onClickView: (uuid: string) => void;
  loading: boolean;
}

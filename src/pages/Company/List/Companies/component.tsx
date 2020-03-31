import React, { FunctionComponent } from "react";
import { ICompaniesProps } from "./interface";
import styles from "./styles.module.scss";
import { ListItem } from "$components/ListItem";
import { Subtitle } from "$components/Subtitle";
import Button from "$components/Button";
import { CompanyLogo } from "$components/CompanyLogo";
import { ListTitle } from "$components/ListTitle";
import { LoadingSpinner } from "$components/LoadingSpinner";

const Companies: FunctionComponent<ICompaniesProps> = (
  {
    companies,
    onClickView,
    viewButtonText,
    loading
  }) => (
  <>
    <ListTitle titleTranslationPath={"companies"} />
    {
      loading?
        <LoadingSpinner />
        :
        companies.map(company =>
          <div className={styles.row} key={company.id}>
            <ListItem>
              <div className={styles.childrenContainer}>
                <div className={styles.leftContainer}>
                  <CompanyLogo
                    size={"medium"}
                    companyName={company.companyName}
                    logo={company.logo}
                  />
                </div>
                <div className={styles.rightContainer}>
                  <div className={`${styles.header}`}>
                    <CompanyLogo
                      className={styles.companyLogo}
                      size={"small"}
                      companyName={company.companyName}
                      logo={company.logo}
                    />
                    <Subtitle className={styles.name}>{company.companyName}</Subtitle>
                  </div>
                  <div className={styles.buttons}>
                    <Button
                      onClick={() => onClickView(company.id)}
                      className="primary"
                    >
                      {viewButtonText}
                    </Button>
                  </div>
                </div>
              </div>
            </ListItem>
          </div>
        )
    }
  </>
);

export { Companies };

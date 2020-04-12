import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyDetailProps } from "./interface";

import { Headline } from "$components/Headline";
import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { CompanyLogo } from "$components/CompanyLogo";
import { LoadingSpinner } from "$components/LoadingSpinner";

const Detail: FunctionComponent<ICompanyDetailProps> = (
  {
    company: {
      companyName,
      email = "",
      slogan = "",
      logo = "",
      website = "",
      description = "",
      photos = []
    },
    loading
  }
) => {
  if (loading) return <LoadingSpinner />;

  return (
    <DetailMainContainer>
      <div className={styles.header}>
        <CompanyLogo
          size={"large"}
          companyName={companyName}
          logo={logo}
        />
        <div className={styles.mainInfo}>
          <Headline headline={companyName}/>
          <Subtitle className={styles.companySlogan}>{slogan}</Subtitle>
          <DetailContactMe email={email} website={website}/>
        </div>
      </div>
      <Description description={description}/>
      <section className={styles.photos}>
        {
          photos.map((source, index) =>
            (<img key={index} src={source} alt={`${companyName}`}/>)
          )}
      </section>
    </DetailMainContainer>
  );
};

export { Detail };

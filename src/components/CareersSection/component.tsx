import React, { FunctionComponent } from "react";
import { ICareersProps } from "./interfaces";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { CareersDetail } from "./CareersDetail";
import classNames from "classnames";

export const CareersSection: FunctionComponent<ICareersProps> = ({
  className,
  careers,
  mobileLayout,
  translations
}) => (
  <div className={className}>
    <section className={classNames(styles.items, { [styles.mobile]: mobileLayout })}>
      <Subtitle>{translations.careersTitle}</Subtitle>
      <CareersDetail
        careers={careers}
        className={styles.item}
        regularFontWeight={false}
        withSubjects
      />
    </section>
  </div>
);

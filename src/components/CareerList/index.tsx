import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { ICareer } from "$interfaces/Career";

import styles from "./styles.module.scss";

export const CareerList: FunctionComponent<ICareerListProps> = ({ careers, className }) => (
  <>
    {
      careers.map(({ code, description }) =>
        <span key={code} className={classNames(styles.career, className)}>{description}</span>
      )
    }
  </>
);

interface ICareerListProps {
  careers: ICareer[];
  className?: string;
}

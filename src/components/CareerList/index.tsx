import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { ICareer } from "$interfaces/Career";

import styles from "./styles.module.scss";

export const CareerList: FunctionComponent<ICareerListProps> = ({
  careers,
  className,
  shorten = false
}) => {
  return (
    <>
      {careers.map(({ code, description }) => {
        let finalText = description;
        if (shorten) finalText = finalText.replace("Ingeniería", "Ing.");
        if (shorten) finalText = finalText.replace("Licenciatura", "Lic.");
        return (
          <span key={code} className={classNames(styles.career, className)}>
            {finalText}
          </span>
        );
      })}
    </>
  );
};

interface ICareerListProps {
  careers: ICareer[];
  className?: string;
  shorten?: boolean;
}

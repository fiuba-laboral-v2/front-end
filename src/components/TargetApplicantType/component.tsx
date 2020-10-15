import React, { FunctionComponent } from "react";
import { ITargetApplicantType } from "./interfaces";

export const TargetApplicantType: FunctionComponent<ITargetApplicantType> = ({
  translations,
  targetApplicantType,
  className
}) => <span className={className}>{translations[targetApplicantType]}</span>;

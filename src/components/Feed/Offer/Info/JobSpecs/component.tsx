import React, { FunctionComponent } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { SpecItem } from "./SpecItem";
import { IComponentProps } from "./interfaces";

export const JobSpecs: FunctionComponent<IComponentProps> = (
  {
    salary,
    workload,
    translations,
    className
  }
) => (
  <div className={className}>
    <SpecItem item={`${workload}`} description={translations.timeDescription}>
      <AccessTimeIcon fontSize="small" />
    </SpecItem>
    <SpecItem item={salary} >
      <AttachMoneyIcon fontSize="small"/>
    </SpecItem>
  </div>
);

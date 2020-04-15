import React, { FunctionComponent } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { SpecItem } from "./SpecItem";

const timeDescription = "horas por día";

const setSalary = ({minimumSalary, maximumSalary}: ISalary) =>
  maximumSalary ? `${minimumSalary} - ${maximumSalary}` : `${minimumSalary}`;

const JobSpecs: FunctionComponent<IJobSpecsProps> = (
  {
    salary,
    workload,
    className
  }
) => (
  <div className={className}>
    <SpecItem item={`${workload}`} description={timeDescription}>
      <AccessTimeIcon fontSize="small" />
    </SpecItem>
    <SpecItem item={setSalary(salary)} >
      <AttachMoneyIcon fontSize="small"/>
    </SpecItem>
  </div>
);

interface ISalary {
  minimumSalary: number;
  maximumSalary: number;
}
interface IJobSpecsProps {
  salary: ISalary;
  workload: number;
  className?: string;
}

export { JobSpecs };

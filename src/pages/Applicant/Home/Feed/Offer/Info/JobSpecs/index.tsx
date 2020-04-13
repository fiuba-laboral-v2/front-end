import React, { FunctionComponent } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { SpecItem } from "./SpecItem";

const timeDescription = "horas por día";

const setSalary = ({minimumSalary, maximumSalary}: IJobSpecsProps["salary"]) =>
  maximumSalary ? `${minimumSalary} - ${maximumSalary}` : `${minimumSalary}`;

const JobSpecs: FunctionComponent<IJobSpecsProps> = ({salary, workload}) => (
  <div>
    <SpecItem item={`${workload}`} description={timeDescription}>
      <AccessTimeIcon fontSize="small" />
    </SpecItem>
    <SpecItem item={setSalary(salary)} >
    <AttachMoneyIcon fontSize="small"/>
    </SpecItem>
  </div>
);

interface IJobSpecsProps {
  salary: {
    minimumSalary: number,
    maximumSalary: number,
  };
  workload: number;
}

export { JobSpecs };

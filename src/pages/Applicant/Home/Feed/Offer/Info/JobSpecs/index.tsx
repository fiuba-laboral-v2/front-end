import React, { FunctionComponent } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { SpecItem } from "./SpecItem";

const JobSpecs: FunctionComponent<IJobSpecsProps> = ({salary, workload}) => (
  <div>
    <SpecItem item={workload.time} description={workload.description}>
      <AccessTimeIcon fontSize="small" />
    </SpecItem>
    <SpecItem item={salary} >
    <AttachMoneyIcon fontSize="small"/>
    </SpecItem>
  </div>
);

interface IJobSpecsProps {
  salary: string;
  workload: {
    time: string;
    description: string;
  };
}

export { JobSpecs };

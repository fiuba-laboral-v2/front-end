import React, { FunctionComponent } from "react";
import { IApplicantsProps } from "./interface";
import { ListItem } from "$components/ListItem";

const Applicants: FunctionComponent<IApplicantsProps> = (
  {
    applicants,
    onClickEdit,
    onClickView,
    editButtonText,
    viewButtonText
  }) => (
  <div>
    {
      applicants.map(applicant =>
        <ListItem>
          <p>{`${applicant.name} ${applicant.surname}`}</p>
          <button onClick={() => onClickEdit(applicant.padron)}>{editButtonText}</button>
          <button onClick={() => onClickView(applicant.padron)}>{viewButtonText}</button>
        </ListItem>
      )
    }
  </div>
);


export { Applicants };

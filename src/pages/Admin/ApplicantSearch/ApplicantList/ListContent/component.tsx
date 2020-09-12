import React, { FunctionComponent } from "react";
import { Row } from "./Row";
import { Item } from "./Item";
import { IApplicant } from "$interfaces/Applicant";

export const ListContent: FunctionComponent<IListContent> = ({ applicants }) => (
  <Row applicants={applicants}>
    {
      applicant => <Item applicant={applicant}/>
    }
  </Row>
);

interface IListContent {
  applicants: IApplicant[];
}

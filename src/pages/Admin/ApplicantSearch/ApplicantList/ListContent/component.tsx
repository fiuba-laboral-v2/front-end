import React, { FunctionComponent } from "react";
import { Columns } from "../Columns";
import { Row, Item } from "./elements";
import { IApplicant } from "$interfaces/Applicant";

export const ListContent: FunctionComponent<IListContent> = ({ applicants }) => (
  <Row applicants={applicants}>
    {
      applicant => (
        <Columns>
          {column => <Item column={column} applicant={applicant} />}
        </Columns>
      )
    }
  </Row>
);

interface IListContent {
  applicants: IApplicant[];
}

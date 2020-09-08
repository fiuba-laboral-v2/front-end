import React, { FunctionComponent, Fragment } from "react";
import { useGetApplicants } from "$hooks";
import { ListContent } from "./component";

export const ListContentContainer: FunctionComponent = () => {
  const result = useGetApplicants();
  const applicants = result?.data?.getApplicants;
  return (
    <Fragment>
      {applicants && <ListContent applicants={applicants} />}
    </Fragment>
  );
};

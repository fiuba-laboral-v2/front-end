import React, { FunctionComponent } from "react";
import { useApplicants } from "$hooks";
import { ListContent } from "./component";

export const ListContentContainer: FunctionComponent = () => {
  const result = useApplicants();
  const applicants = result?.data?.getApplicants;
  return (
    <>
      {applicants && <ListContent applicants={applicants} />}
    </>
  );
};

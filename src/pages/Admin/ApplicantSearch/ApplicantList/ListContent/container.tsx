import React, { FunctionComponent } from "react";
import { useGetApplicants } from "$hooks";
import { ListContent } from "./component";

export const ListContentContainer: FunctionComponent = () => {
  const result = useGetApplicants();
  const applicants = result?.data?.getApplicants;
  return (
    <>
      {applicants && <ListContent applicants={applicants} />}
    </>
  );
};

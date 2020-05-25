import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { GET_APPLICANTS } from "$queries";
import { Applicants } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();

  const {
    data: { getApplicants } = { getApplicants: [] },
    error,
    loading
  } = useQuery(GET_APPLICANTS);

  if (error) return <Redirect to={RoutesBuilder.public.notFound}/>;

  return (
    <Applicants
      loading={loading}
      applicants={getApplicants}
      onClickView={() => history.push(RoutesBuilder.applicant.myProfile)}
    />
  );
};

export { ApplicantsContainer };

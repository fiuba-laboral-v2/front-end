import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import NotFound from "$pages/NotFound";
import { GET_APPLICANTS, getTranslations } from "$queries";
import Loading from "$pages/Loading";
import { Applicants } from "./component";
import { RoutesBuilder } from "$src/routesBuilder";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  // TODO: Agregar las translation "view" en el back
  const translationsResponse = useQuery(getTranslations, {
      variables: { paths: ["edit", "save"] }
    }
  );
  const { data, error, loading } = useQuery(GET_APPLICANTS);
  if (error || translationsResponse.error) return <NotFound/>;
  if (loading || translationsResponse.loading) return <Loading />;

  return (
    <Applicants
      applicants={data.getApplicants}
      onClickEdit={(padron: number) => history.push(RoutesBuilder.applicant.edit(padron))}
      onClickView={(padron: number) => history.push(RoutesBuilder.applicant.detail(padron))}
      editButtonText={translationsResponse.data.getTranslations[0]}
      viewButtonText={translationsResponse.data.getTranslations[1]}
    />
  );
};


export { ApplicantsContainer };

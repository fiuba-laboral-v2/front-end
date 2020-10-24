import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByUuid } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Window } from "$components/Window";
import { CompanyDetail } from "$components/CompanyDetail";

export const CompanyProfile: FunctionComponent = () => {
  const { uuid } = useParams<IRouteParams>();
  const response = useCompanyByUuid({ uuid });

  return (
    <Window>
      {response.data ? (
        <CompanyDetail company={response.data.getCompanyByUuid} />
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
};

interface IRouteParams {
  uuid: string;
}

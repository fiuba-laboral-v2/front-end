import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByUuid } from "$hooks";
import { Window } from "$components/Window";
import { CompanyDetail } from "$components/CompanyDetail";
import { LoadingWindow } from "$components/LoadingWindow";

export const CompanyProfile: FunctionComponent = () => {
  const { uuid } = useParams<IRouteParams>();
  const response = useCompanyByUuid({ uuid });

  if (!response.data) return <LoadingWindow />;

  return (
    <Window>
      <CompanyDetail company={response.data.getCompanyByUuid} />
    </Window>
  );
};

interface IRouteParams {
  uuid: string;
}

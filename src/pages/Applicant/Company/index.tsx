import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByUuid } from "$hooks";
import { Window } from "$components/Window";
import { CompanyDetail } from "$components/CompanyDetail";

export const CompanyProfile: FunctionComponent = () => {
  const { uuid } = useParams<IRouteParams>();
  const company = useCompanyByUuid({ uuid });

  return (
    <Window>
      <CompanyDetail {...{ company }} />
    </Window>
  );
};

interface IRouteParams {
  uuid: string;
}

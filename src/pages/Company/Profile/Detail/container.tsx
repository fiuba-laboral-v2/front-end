import React, { FunctionComponent } from "react";
import { GET_COMPANY_BY_UUID } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";
import { ICompany } from "$interfaces/Company";
import { Detail } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();
  const {
    data: { getCompanyByUuid: company } = { getCompanyByUuid: {} as ICompany },
    error,
    loading
  } = useQuery(GET_COMPANY_BY_UUID, { variables: { uuid } });
  if (error) history.push(RoutesBuilder.notFound);

  return <Detail loading={loading} company={company}/>;
};

export { DetailContainer };

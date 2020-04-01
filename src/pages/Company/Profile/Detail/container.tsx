import React, { FunctionComponent } from "react";
import { getCompanyById as GET_COMPANY_BY_ID } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { useParams, useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";
import { Detail } from "./component";
import { RoutesBuilder } from "$src/routesBuilder";

const DetailContainer: FunctionComponent = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: { getCompanyById: company } = { getCompanyById: {} as ICompany },
    error,
    loading
  } = useQuery(GET_COMPANY_BY_ID, { variables: { id: id } });
  if (error) history.push(RoutesBuilder.notFound);

  return <Detail loading={loading} company={company} />;
};

export { DetailContainer };

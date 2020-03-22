import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import NotFound from "$pages/NotFound";
import { GET_APPLICANTS } from "$queries";
import Loading from "$pages/Loading";
import { IApplicant } from "$interfaces/Applicant";
import { ListItem } from "$components/ListItem";
import { RoutesBuilder } from "$src/routesBuilder";

const Applicants: FunctionComponent = () => {
  const history = useHistory();
  const { data, error, loading } = useQuery(GET_APPLICANTS);
  if (error) return <NotFound/>;
  if (loading) return <Loading />;

  const applicants: IApplicant[] = data.getApplicants;

  return (
    <div>
      {
        applicants.map(applicant =>
          <ListItem>
            <p>{`${applicant.name} ${applicant.surname}`}</p>
            <button
              onClick={() => history.push(RoutesBuilder.applicant.edit(applicant.padron))}
            >
              Editar
            </button>
            <button
              onClick={() => history.push(RoutesBuilder.applicant.detail(applicant.padron))}
            >
              Ver
            </button>
          </ListItem>
        )
      }
    </div>
  );
};


export { Applicants };

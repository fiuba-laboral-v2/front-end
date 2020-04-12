import React, { FunctionComponent } from "react";
// import { useHistory } from "react-router-dom";
// import { RoutesBuilder } from "$src/routesBuilder";
import { Feed } from "./component";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_TRANSLATIONS } from "$queries";
// import { LoadingSpinner } from "$components/LoadingSpinner";

const FeedContainer: FunctionComponent = () => {
  // const history = useHistory();

  // const {
  //   data: { getTranslations } = { getTranslations: [] },
  //   error: translationsError,
  //   loading: loadingTranslations
  // } = useQuery(GET_TRANSLATIONS, {
  //   variables: {
  //     paths: [
  //       "applicant.edit.title",
  //       "applicant.edit.name",
  //     ]
  //   }
  // });

  // if (applicantError || translationsError) history.push(RoutesBuilder.notFound);

  // if (loadingApplicant || loadingTranslations) return <LoadingSpinner/>;


  return (
    <Feed />
  );
};

export { FeedContainer };

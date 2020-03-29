import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, getTranslations } from "$queries";
import { SignUp } from "./component";
import { translationsMapper } from "./utils";
import SignUpTranslations from "./translations";

import Loading from "$pages/Loading";

const SignUpContainer: FunctionComponent = () => {
  const { data: translationsData, loading } = useQuery(getTranslations, {
      variables: {
        paths: SignUpTranslations
      }
    }
  );

  const { data, loading: loadingCareers } = useQuery(GET_CAREERS);

  if (loading || loadingCareers) return <Loading/>;

  const translations = translationsMapper(translationsData.getTranslations);

  return (
    <SignUp translations={translations} careers={data.getCareers}/>
  );
};

export { SignUpContainer };

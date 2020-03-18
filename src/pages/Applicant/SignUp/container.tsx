import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import { getTranslations, GET_CAREERS } from "$queries";
import SignUp from "./component";
import { translationsMapper, careersMapper } from "./utils";
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

  const [redirectUrl, setRedirectUrl] = useState() as any;

  if (loading || loadingCareers) return <Loading />;

  if (redirectUrl) return (<Redirect to={redirectUrl} />);

  const translations = translationsMapper(translationsData.getTranslations);
  const careers = careersMapper(data.getCareers);

  return (
    <SignUp translations={translations} careers={careers} setRedirectUrl={setRedirectUrl} />
  );
};

export { SignUpContainer };

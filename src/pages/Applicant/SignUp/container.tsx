import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, getTranslations } from "$queries";
import { SignUp } from "./component";
import { careersMapper, translationsMapper } from "./utils";
import SignUpTranslations from "./translations";

import Loading from "$pages/Loading";

const SignUpContainer: FunctionComponent = () => {
  const [, setRedirectUrl] = useState();

  const { data: translationsData, loading } = useQuery(getTranslations, {
      variables: {
        paths: SignUpTranslations
      }
    }
  );

  const { data, loading: loadingCareers } = useQuery(GET_CAREERS);

  if (loading || loadingCareers) return <Loading/>;

  const translations = translationsMapper(translationsData.getTranslations);
  const careers = careersMapper(data.getCareers);

  return (
    <SignUp translations={translations} careers={careers} setRedirectUrl={setRedirectUrl}/>
  );
};

export { SignUpContainer };

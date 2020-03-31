import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, getTranslations as GET_TRANSLATIONS } from "$queries";
import { SignUp } from "./component";
import { translationsMapper } from "./utils";
import SignUpTranslations from "./translations";

const SignUpContainer: FunctionComponent = () => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    loading
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: SignUpTranslations } });
  const {
    data: { getCareers } = { getCareers: [] },
    loading: loadingCareers
  } = useQuery(GET_CAREERS);
  const translations = translationsMapper(getTranslations);

  return (
    <SignUp
      loading={loading || loadingCareers}
      translations={translations}
      careers={getCareers}
    />
  );
};

export { SignUpContainer };

import React, { FunctionComponent } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, getTranslations } from "$queries";
import { SignUp } from "./component";
import { saveApplicantParams, signUpParams, translationsMapper } from "./utils";
import SignUpTranslations from "./translations";

import Loading from "$pages/Loading";
import { RoutesBuilder } from "../../../routesBuilder";
import { SAVE_APPLICANT, SIGN_UP } from "../../../graphql/mutations";
import { useHistory } from "react-router-dom";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [signUp] = useMutation(SIGN_UP);
  const [saveApplicant] = useMutation(SAVE_APPLICANT);

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
    <SignUp
      translations={translations}
      careers={data.getCareers}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp({
          variables: signUpParams(values)
        });
        const { data: { saveApplicant: applicant } } = await saveApplicant({
          variables: saveApplicantParams(values)
        });
        setSubmitting(false);
        history.push(RoutesBuilder.applicant.detail(applicant.uuid));
      }}
    />
  );
};

export { SignUpContainer };

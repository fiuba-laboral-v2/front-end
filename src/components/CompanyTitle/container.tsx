import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import CompanyTitle from "./component";

const CompanyTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["company_profile.explanation", "company_profile.title", "edit"]
      }
    }
  );
  const [explanation, myCompanyProfile, edit] = data ? data.getTranslations : ["", "", ""];

  return (
    <CompanyTitle
      myCompany={myCompanyProfile}
      explanation={explanation}
      edit={edit}
    />
  );
};

export default CompanyTitleContainer;

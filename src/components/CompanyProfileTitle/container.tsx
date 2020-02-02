import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../graphql/queries";
import CompanyProfileTitle from "./component";

const CompanyProfileTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["company_profile.explanation", "company_profile.title", "edit"]
      }
    }
  );
  const [explanation, myCompanyProfile, edit] = data ? data.getTranslations : ["", "", ""];

  return (
    <CompanyProfileTitle
      myCompanyProfile={myCompanyProfile}
      explanation={explanation}
      edit={edit}
    />
  );
};

export default CompanyProfileTitleContainer;

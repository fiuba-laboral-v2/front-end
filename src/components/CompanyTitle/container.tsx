import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import CompanyTitle from "./component";

const CompanyTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["company.explanation", "company.title", "edit"]
      }
    }
  );
  const [explanation, myCompany, edit] = data ? data.getTranslations : ["", "", ""];

  return (
    <CompanyTitle
      myCompany={myCompany}
      explanation={explanation}
      edit={edit}
    />
  );
};

export default CompanyTitleContainer;

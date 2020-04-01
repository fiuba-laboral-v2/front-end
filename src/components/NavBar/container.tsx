import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { NavBar } from "./component";
import { getTranslations } from "$queries";

export const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
    variables: {
      paths: ["companies", "applicants", "applicant.signUp.title"]
    }
  });
  const [companies, applicants, signUp] = data ? data.getTranslations : ["", "", ""];

  return (
    <NavBar
      companies={companies}
      applicants={applicants}
      signUp={signUp}
      username={"Demo"}
    />
  );
};

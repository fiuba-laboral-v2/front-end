import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { NavBar } from "./component";
import { GET_TRANSLATIONS } from "$queries";

export const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(GET_TRANSLATIONS, {
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

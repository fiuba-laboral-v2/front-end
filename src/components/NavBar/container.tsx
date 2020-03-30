import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { getTranslations } from "$queries";

const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
    variables: {
      paths: ["app.title", "companies", "applicants", "applicant.signUp.title"]
    }
  });
  const [title, companies, applicants, signUp] = data ? data.getTranslations : ["", "", "", ""];

  return (
    <NavBar
      title={title}
      companies={companies}
      applicants={applicants}
      signUp={signUp}
      username={"Demo"}
    />
  );
};

export default NavBarContainer;

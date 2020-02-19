import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { getTranslations } from "$queries";

const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
    variables: {
      paths: ["app.title", "companies", "applicants", "app.log_out"]
    }
  });
  const [title, companies, applicants, logOut] = data ? data.getTranslations : ["", "", ""];

  return (
    <NavBar
      title={title}
      companies={companies}
      applicants={applicants}
      logOut={logOut}
      username={"Daniela Castro"}
    />
  );
};

export default NavBarContainer;

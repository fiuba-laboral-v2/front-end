import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { getTranslations } from "$queries";

const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
    variables: {
      paths: ["app.title", "my_company", "app.log_out"]
    }
  });
  const [title, myCompanyProfile, logOut] = data ? data.getTranslations : ["", "", ""];

  return (
    <NavBar
      title={title}
      myCompany={myCompanyProfile}
      logOut={logOut}
      username={"Daniela Castro"}
    />
  );
};

export default NavBarContainer;

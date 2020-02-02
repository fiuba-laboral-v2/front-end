import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { getTranslations } from "../../graphql/queries";

const NavBarContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, { variables: { paths: ["app.title", "my_company"] } });
  const [title, myCompanyProfile] = data ? data.getTranslations : ["", ""];

  return (
    <NavBar
      title={title}
      myCompanyProfile={myCompanyProfile}
    />
  );
};

export default NavBarContainer;

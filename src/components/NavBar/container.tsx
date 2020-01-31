import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { translation } from "../../graphql/queries";

const NavBarContainer: FunctionComponent = () => {
  const { data: title } = useQuery(translation, { variables: { path: "app.title" } });
  const { data: myCompanyProfile } = useQuery(translation, { variables: { path: "my_company" } });

  return (
    <NavBar
      title={title?.translation || ""}
      myCompanyProfile={myCompanyProfile?.translation || ""}
    />
  );
};

export default NavBarContainer;

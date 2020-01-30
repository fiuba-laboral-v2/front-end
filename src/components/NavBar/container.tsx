import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import NavBar from "./component";
import { translation } from "../../graphql/queries";

const NavBarContainer: FunctionComponent = () => {
  const { data: title } = useQuery(translation, { variables: { path: "aplicacion.titulo" } });
  const { data: myCompanyProfile } = useQuery(translation, { variables: { path: "mi_empresa" } });

  return (
    <NavBar
      title={title?.translation}
      myCompanyProfile={myCompanyProfile?.translation}
    />
  );
};

export default NavBarContainer;

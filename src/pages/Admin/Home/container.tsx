import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_ADMIN_BY_ID from "./graphql/getAdminById";

import LoadingScreen from "$pages/Loading";
import AdminHome from "./component";

const AdminHomeContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_ADMIN_BY_ID);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error :</p>;

  const { getAdminById: { name, age, surname } } = data;

  return (
    <AdminHome
      name={name}
      surname={surname}
      age={age}
    />
  );
};

export default AdminHomeContainer;

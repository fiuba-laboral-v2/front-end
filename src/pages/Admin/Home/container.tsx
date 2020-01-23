import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import LoadingScreen from "$pages/Loading";
import AdminHome from "./component";
import { loader } from "graphql.macro";

const getAdminById = loader("./queries/getAdminById.graphql");

const AdminHomeContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery(getAdminById, { variables: { id: "0" } });

  if (loading) return <LoadingScreen/>;
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

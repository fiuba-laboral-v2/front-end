import React, { FunctionComponent } from "react";

interface IAdminHomeProps {
  name: string;
  surname: string;
  age: number;
}

const AdminHome: FunctionComponent<IAdminHomeProps> = ({name, surname, age}) => (
  <div>
    <h1>Name: {name}</h1>
    <h1>Surname: {surname}</h1>
    <h2>Age: {age}</h2>
  </div>
);

export default AdminHome;

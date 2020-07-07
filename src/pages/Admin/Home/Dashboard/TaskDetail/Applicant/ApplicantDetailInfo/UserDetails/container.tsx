import React, { FunctionComponent } from "react";
import { UserDetails } from "./component";
import { IUserDetailsContainerProps } from "./interfaces";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  {
    applicant
  }
) => {
  return <UserDetails applicant={applicant} translations={{ padron: "Padrón" }}/>;
};

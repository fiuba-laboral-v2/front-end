import React, { FunctionComponent } from "react";
import { UserDetails } from "../../../UserDetails";
import { IUserDetailsContainerProps } from "./interfaces";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  {
    applicant
  }
) => {
  return (
    <UserDetails
      user={applicant.user}
      additionalInfoTitle="Padrón"
      additionalInfo={applicant.padron.toString()}
    />
  );
};

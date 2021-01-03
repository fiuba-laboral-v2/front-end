import React, { FunctionComponent } from "react";
import { useMyCompanyProfile } from "$hooks";
import { Profile } from "./component";

export const ProfileContainer: FunctionComponent = () => {
  const company = useMyCompanyProfile();
  return <Profile company={company} />;
};

import React, { FunctionComponent } from "react";
import { Profile } from "./component";
import { useMyApplicantProfile } from "$hooks";
import { Window } from "$components/Window";

export const ProfileContainer: FunctionComponent = () => {
  const applicant = useMyApplicantProfile();
  return (
    <Window loading={!applicant}>
      <Profile applicant={applicant} />
    </Window>
  );
};

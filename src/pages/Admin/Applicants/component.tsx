import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { MainTitle } from "./MainTitle";
import { MainContainer } from "./MainContainer";
import { ApplicantList } from "./ApplicantList";

export const Applicants: FunctionComponent<IApplicants> = () => (
  <Window width="fullWidth" desktopOnly>
    <MainContainer>
      <MainTitle />
      <ApplicantList />
    </MainContainer>
  </Window>
);

interface IApplicants {
  translations: {
    title: string;
    subtitle: string;
  };
}

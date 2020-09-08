import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { MainTitle } from "./MainTitle";
import { MainContainer } from "./elements";
import { ApplicantList } from "./ApplicantList";

export const ApplicantSearch: FunctionComponent<IApplicantSearch> = () => {

  return (
    <Window width="fullWidth" desktopOnly>
      <MainContainer>
        <MainTitle />
        <ApplicantList />
      </MainContainer>
    </Window>
  );
};

interface IApplicantSearch {
  translations: {
    title: string;
    subtitle: string;
  };
}

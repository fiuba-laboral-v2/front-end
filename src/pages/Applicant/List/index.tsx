import React, { FunctionComponent } from "react";
import { Applicants } from "./Applicants";
import { Title } from "./Title";
import { Window } from "$components/Window";

const List: FunctionComponent = () => (
  <Window>
    <Title/>
    <Applicants />
  </Window>
);

export { List };

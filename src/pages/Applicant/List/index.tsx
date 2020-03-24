import React, { FunctionComponent } from "react";
import { Applicants } from "./Applicants";
import { Window } from "$components/Window";

const List: FunctionComponent = () => (
  <Window>
    <Applicants />
  </Window>
);

export { List };

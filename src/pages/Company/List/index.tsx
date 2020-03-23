import React, { FunctionComponent } from "react";
import { Companies } from "./Companies";
import { Title } from "./Title";
import { Window } from "$components/Window";

const List: FunctionComponent = () => (
  <Window>
    <Title />
    <Companies />
  </Window>
);

export { List };

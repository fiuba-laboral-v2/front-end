import React, { FunctionComponent } from "react";
import { Companies } from "./Companies";
import { Window } from "$components/Window";

const List: FunctionComponent = () => (
  <Window>
    <Companies />
  </Window>
);

export { List };

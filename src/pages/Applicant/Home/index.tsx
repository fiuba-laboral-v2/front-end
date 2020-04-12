import React, { FunctionComponent } from "react";
import { Feed } from "./Feed";
import { Window } from "$components/Window";

const Home: FunctionComponent = () => (
  <Window>
    <Feed />
  </Window>
);

export { Home };

import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { LogInForm } from "./LogInForm";

const LogIn: FunctionComponent = () => (
  <Window>
    <LogInForm/>
  </Window>
);

export { LogIn };

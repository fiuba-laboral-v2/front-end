import React, { FunctionComponent } from "react";
import { Window } from "../Window";
import { LoadingSpinner } from "../LoadingSpinner";
import { IWindowProps } from "../Window/component";

export const LoadingWindow: FunctionComponent<IWindowProps> = props => (
  <Window {...props}>
    <LoadingSpinner />
  </Window>
);

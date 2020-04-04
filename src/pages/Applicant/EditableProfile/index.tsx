import React, { FunctionComponent } from "react";
import { EditableDetail } from "./EditableDetail";
import { Window } from "$components/Window";

const EditableProfile: FunctionComponent = () => (
  <Window>
    <EditableDetail/>
  </Window>
);

export { EditableProfile };

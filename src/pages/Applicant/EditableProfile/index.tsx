import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { EditableDetail } from "./EditableDetail";
import { Window } from "$components/Window";

const EditableProfile: FunctionComponent = () => (
  <Window>
    <Title/>
    <EditableDetail/>
  </Window>
);

export { EditableProfile };

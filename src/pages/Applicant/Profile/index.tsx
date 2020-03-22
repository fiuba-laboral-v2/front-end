import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { Detail } from "./Detail";
import { Window } from "$components/Window";

const Profile: FunctionComponent = () => (
  <Window>
    <Title/>
    <Detail/>
  </Window>
);

export default Profile;

import React, { FunctionComponent } from "react";
import { ListHeader } from "./ListHeader";
import { ListContent } from "./ListContent";
import { ListContainer } from "./ListContainer";

export const ApplicantList: FunctionComponent = () => (
  <ListContainer>
    <ListHeader />
    <ListContent />
  </ListContainer>
);

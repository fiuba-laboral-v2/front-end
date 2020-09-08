import React, { FunctionComponent } from "react";
import { ListHeader } from "./ListHeader";
import { ListContent } from "./ListContent";
import { ListContainer } from "./elements";

export const ApplicantListContainer: FunctionComponent = () => {

  return (
    <ListContainer>
      <ListHeader />
      <ListContent />
    </ListContainer>
  );
};

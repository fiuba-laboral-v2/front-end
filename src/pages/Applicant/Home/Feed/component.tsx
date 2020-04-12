import React, { FunctionComponent } from "react";
import { ListItem } from "$components/ListItem";
import { Offer } from "$components/Offer";

const Feed: FunctionComponent = () => (
  <div>
    <ListItem>
      <Offer />
    </ListItem>
  </div>
);

export { Feed };

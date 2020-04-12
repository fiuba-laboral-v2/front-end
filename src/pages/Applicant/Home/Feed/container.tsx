import React, { FunctionComponent } from "react";
import { Feed } from "./component";

import getOffers from "./constants";

const FeedContainer: FunctionComponent = () => {
  const offers = getOffers();

  return (
    <Feed offers={offers} />
  );
};

export { FeedContainer };

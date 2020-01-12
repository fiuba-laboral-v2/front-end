import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import apolloClient from "./apollo";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./routes";

const App: FunctionComponent = () => (
  <ApolloProvider client={apolloClient}>
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  </ApolloProvider>
);

export default App;

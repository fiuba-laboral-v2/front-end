import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "./ApolloClient";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./routes";

const App: FunctionComponent = () => (
  <ApolloProvider client={ApolloClient}>
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
  </ApolloProvider>
);

export default App;

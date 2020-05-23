import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "./ApolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes/routes";
import { MaterialUITheme } from "./materialUITheme";

const App: FunctionComponent = () => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={MaterialUITheme}>
      <Router>
        <Routes/>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

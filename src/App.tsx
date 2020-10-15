import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient } from "./ApolloClient";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import Routes from "./routes/routes";
import { MaterialUITheme } from "./materialUITheme";
import { ApolloProvider } from "@apollo/client";

const App: FunctionComponent = () => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={MaterialUITheme}>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

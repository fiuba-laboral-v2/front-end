import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routes from "./routes";

const App: FunctionComponent = () =>
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
;

export default App;

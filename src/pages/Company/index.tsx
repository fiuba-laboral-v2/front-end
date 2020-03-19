import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import CompanyTitle from "./CompanyTitle";
import { CompanyDetail } from "./CompanyDetail";

const Company: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <CompanyTitle/>
      <CompanyDetail/>
    </div>
  </div>
);

export default Company;

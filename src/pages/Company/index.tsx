import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import CompanyTitle from "$components/CompanyTitle";
import { CompanyDetailContainer } from "$components/CompanyDetail";

const Company: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <CompanyTitle/>
      <CompanyDetailContainer/>
    </div>
  </div>
);

export default Company;

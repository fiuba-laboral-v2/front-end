import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import CompanyProfileTitle from "../../components/CompanyProfileTitle";
import CompanyProfileDetail from "../../components/CompanyProfileDetail";

const CompanyProfile: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <CompanyProfileTitle/>
      <CompanyProfileDetail/>
    </div>
  </div>
);

export default CompanyProfile;

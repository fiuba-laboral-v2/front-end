import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import CompanyProfileTitle from "../../components/CompanyProfileTitle";

const CompanyProfile: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <CompanyProfileTitle/>
    </div>
  </div>
);

export default CompanyProfile;

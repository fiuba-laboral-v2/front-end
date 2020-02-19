import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import CompanyTitle from "$components/CompanyTitle";
import { ApplicantDetailContainer } from "$components/ApplicantDetail";

const Applicant: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <CompanyTitle/>
      <ApplicantDetailContainer/>
    </div>
  </div>
);

export default Applicant;

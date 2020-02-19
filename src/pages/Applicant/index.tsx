import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantTitleContainer } from "$components/ApplicantTitle";
import { ApplicantDetailContainer } from "$components/ApplicantDetail";

const Applicant: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <ApplicantTitleContainer/>
      <ApplicantDetailContainer/>
    </div>
  </div>
);

export default Applicant;

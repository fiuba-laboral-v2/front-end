import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantTitle } from "$components/Applicant/ApplicantTitle";
import { ApplicantDetail } from "$components/Applicant/ApplicantDetail";

const ApplicantDetails: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <ApplicantTitle/>
      <ApplicantDetail/>
    </div>
  </div>
);

export { ApplicantDetails };

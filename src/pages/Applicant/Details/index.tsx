import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantTitle } from "$components/ApplicantTitle";
import { ApplicantDetail } from "$components/ApplicantDetail";

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

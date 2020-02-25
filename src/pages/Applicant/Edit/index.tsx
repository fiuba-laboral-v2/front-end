import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantTitle } from "$components/ApplicantTitle";
import { ApplicantDetailEditable } from "$components/ApplicantDetailEditable";

const ApplicantDetailsEditable: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <ApplicantTitle/>
      <ApplicantDetailEditable/>
    </div>
  </div>
);

export { ApplicantDetailsEditable };

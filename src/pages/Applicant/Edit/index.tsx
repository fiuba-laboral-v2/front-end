import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantDetailEditableTitle } from "$components/ApplicantDetailEditableTitle";
import { ApplicantDetailEditable } from "$components/ApplicantDetailEditable";

const ApplicantDetailsEditable: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <ApplicantDetailEditableTitle/>
      <ApplicantDetailEditable/>
    </div>
  </div>
);

export { ApplicantDetailsEditable };

import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantDetailEditableTitle } from "./ApplicantDetailEditableTitle";
import { ApplicantDetailEditable } from "./ApplicantDetailEditable";

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

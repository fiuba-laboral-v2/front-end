import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantDetailEditableTitle } from "$components/Applicant/ApplicantDetailEditableTitle";
import { ApplicantDetailEditable } from "$components/Applicant/ApplicantDetailEditable";

const EditableDetail: FunctionComponent = () => (
  <div>
    <NavBar />
    <div className="mainContent">
      <ApplicantDetailEditableTitle />
      <ApplicantDetailEditable />
    </div>
  </div>
);

export default EditableDetail;

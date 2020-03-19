import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { ApplicantDetailEditableTitle } from "./ApplicantDetailEditableTitle";
import { ApplicantDetailEditable } from "./ApplicantDetailEditable";

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

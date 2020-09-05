import React, { FunctionComponent } from "react";

import { IApplicant } from "$interfaces/Applicant";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { UpdatedSince } from "$components/UpdatedSince";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ applicant }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminApplicantMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle title={title} humanizedTime={<UpdatedSince date={applicant.updatedAt}/>}/>;
};

export interface IMainTitleContainerProps {
  applicant: IApplicant;
}

interface IAdminApplicantMainTitle {
  title: string;
}

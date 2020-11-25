import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "../../LoadingSpinner";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = ({
  companyUuid,
  scrollToTop,
  className
}) => {
  const company = useCompanyByUuid({ uuid: companyUuid }).data?.getCompanyByUuid;
  if (!company) return <LoadingSpinner />;
  scrollToTop();
  return <CompanyDetailContent {...{ company, className }} />;
};

interface ICompanyDetailContentContainerProps {
  companyUuid: string;
  scrollToTop: () => void;
  className?: string;
}

export { CompanyDetailContentContainer };

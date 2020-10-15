import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = ({
  companyUuid,
  scrollToTop,
  className
}) => {
  const response = useCompanyByUuid({ uuid: companyUuid });
  if (response.error || response.loading) return <LoadingSpinner />;
  scrollToTop();
  return <CompanyDetailContent company={response.data.getCompanyByUuid} className={className} />;
};

interface ICompanyDetailContentContainerProps {
  companyUuid: string;
  scrollToTop: () => void;
  className?: string;
}

export { CompanyDetailContentContainer };

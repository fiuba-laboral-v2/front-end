import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "../../../../../components/LoadingSpinner";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = ({
  companyUuid,
  scrollToTop,
  className
}) => {
  const company = useCompanyByUuid({ uuid: companyUuid });
  if (scrollToTop) scrollToTop();
  return (
    <>
      {!company && <LoadingSpinner />}
      <CompanyDetailContent {...{ company, className }} />
    </>
  );
};

interface ICompanyDetailContentContainerProps {
  companyUuid: string;
  scrollToTop?: () => void;
  className?: string;
}

export { CompanyDetailContentContainer };

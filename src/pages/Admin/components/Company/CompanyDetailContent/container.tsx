import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "../../LoadingSpinner";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = ({
  companyUuid,
  scrollToTop,
  className,
  children
}) => {
  const company = useCompanyByUuid({ uuid: companyUuid });
  if (scrollToTop) scrollToTop();
  return (
    <>
      {!company && <LoadingSpinner />}
      <CompanyDetailContent company={company} className={className}>
        {children}
      </CompanyDetailContent>
    </>
  );
};

interface ICompanyDetailContentContainerProps {
  companyUuid: string;
  scrollToTop?: () => void;
  className?: string;
}

export { CompanyDetailContentContainer };

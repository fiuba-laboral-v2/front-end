import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CompanyLogoInput } from "./component";
import { ICompanyLogoInputContainerProps, ICompanyLogoInputTranslations } from "./interfaces";

export const CompanyLogoInputContainer: FunctionComponent<ICompanyLogoInputContainerProps> = ({
  className,
  setLogo,
  initialValue
}) => {
  const translations = useTranslations<ICompanyLogoInputTranslations>("CompanyLogoInput");
  if (!translations) return <Fragment />;

  return (
    <CompanyLogoInput
      initialValue={initialValue}
      translations={translations}
      setLogo={setLogo}
      className={className}
    />
  );
};

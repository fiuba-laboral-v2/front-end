import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { CompanyLogoInput } from "./component";
import { ICompanyLogoInputContainerProps, ICompanyLogoInputTranslations } from "./interfaces";

export const CompanyLogoInputContainer: FunctionComponent<ICompanyLogoInputContainerProps> = (
  {
    className,
    setLogo,
    initialValue
  }
) => {
  const translations = useTranslations<ICompanyLogoInputTranslations>("CompanyLogoInput");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <CompanyLogoInput
      initialValue={initialValue}
      translations={translations.data}
      setLogo={setLogo}
      className={className}
    />
  );
};

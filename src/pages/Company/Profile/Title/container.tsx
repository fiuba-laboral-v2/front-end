import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks/translations";
import { Title } from "$components/Title";
import { ITitleProps } from "$components/Title/interface";

const TitleContainer: FunctionComponent = () => {
  const {
    translations,
    error
  } = useTranslations<ITitleProps>("companyProfileTitle");
  if (error) return <div />;

  return (
    <Title
      title={translations!.title}
      subtitle={translations!.subtitle}
    />
  );
};

export { TitleContainer };

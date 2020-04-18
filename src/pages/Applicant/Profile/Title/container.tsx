import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { Title } from "$components/Title";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITitleProps } from "$components/Title/interface";

const TitleContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    translations,
    error
  } = useTranslations<ITitleProps>("applicantProfileTitle");

  if (error) history.push(RoutesBuilder.notFound);

  return (
    <Title
      title={translations!.title}
      subtitle={translations!.subtitle}
    />
  );
};

export { TitleContainer };

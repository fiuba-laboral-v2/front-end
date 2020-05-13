import React, { FunctionComponent } from "react";
import { CreateOffer } from "./component";
import { useTranslations } from "../../../models/hooks";
import { ICreateOfferTranslations } from "./interface";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { Redirect } from "react-router-dom";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

export const CreateOfferContainer: FunctionComponent = () => {
  const translations = useTranslations<ICreateOfferTranslations>("createOffer");

  if (translations.loading) return <LoadingSpinner/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  return <CreateOffer
    onSubmit={() => {
      alert("submit!");
    }}
    translations={translations.data}
  />;
};

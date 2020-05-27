import React, { FunctionComponent } from "react";
import { useCreateOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const createOffer = useCreateOffer();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");

  if (translations.loading) return <LoadingSpinner/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <EditOffer
    title={translations.data.create}
    initialValues={{
      title: "",
      description: "",
      hoursPerDay: NaN,
      minimumSalary: NaN,
      maximumSalary: NaN,
      _form: ""
    }}
    onSubmit={async values => {
      const response = await createOffer({
        variables: values,
        handlers: {
          defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
        }
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data.createOffer.uuid));
    }}
    translations={translations.data}
  />;
};

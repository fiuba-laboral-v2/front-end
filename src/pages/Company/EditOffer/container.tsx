import React, { Fragment, FunctionComponent } from "react";
import { useEditOffer, useQuery, useTranslations } from "$hooks";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer, ICreateOfferValues, IEditOfferTranslations } from "$components/EditOffer";
import { useHistory, useParams } from "react-router-dom";
import { IOffer } from "$interfaces/Offer";
import { GET_COMPANY_OFFER_BY_UUID } from "$queries";
import { useSnackbar } from "notistack";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const EditOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");
  const { uuid } = useParams();
  const editOffer = useEditOffer();
  const getOffer = useQuery<{ uuid?: string }, { getOfferByUuid: IOffer }>(
    GET_COMPANY_OFFER_BY_UUID,
    { variables: { uuid } }
  );

  if (translations.loading || getOffer.loading) return <Fragment/>;
  if (translations.error || getOffer.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  const onSubmit = async (values: ICreateOfferValues) => {
    const response = await editOffer({
      variables: values,
      handlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (response.error) return;
    history.push(RoutesBuilder.company.offer(response.data?.editOffer.uuid));
  };

  return <EditOffer
    title={translations.data.edit}
    translations={translations.data}
    initialValues={{ _form: "", ...getOffer.data.getOfferByUuid }}
    onSubmit={onSubmit}
  />;
};

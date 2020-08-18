import React, { Fragment, FunctionComponent } from "react";
import { useCompanyOfferByUuid, useEditOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer, ICreateOfferValues, IEditOfferTranslations } from "$components/EditOffer";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const EditOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");
  const { uuid } = useParams();
  const editOffer = useEditOffer();
  const getOffer = useCompanyOfferByUuid(uuid);

  if (!translations || getOffer.loading || getOffer.error) return <Fragment/>;

  const onSubmit = async (variables: ICreateOfferValues) => {
    const response = await editOffer({
      variables,
      errorHandlers: formErrorHandlers({ enqueueSnackbar })(),
      update: cache => cache.modify({
        id: `Offer:${getOffer.data.getOfferByUuid.uuid}`,
        fields: {
          targetApplicantType: () => variables.targetApplicantType
        }
      })
    });
    if (response.error) return;
    history.push(RoutesBuilder.company.offer(response.data?.editOffer.uuid));
  };

  return <EditOffer
    title={translations.edit}
    translations={translations}
    initialValues={{ _form: "", ...getOffer.data.getOfferByUuid }}
    onSubmit={onSubmit}
  />;
};

import React, { FunctionComponent } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/translations";
import { sortBy } from "lodash";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_OFFER_BY_UUID } from "$queries";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { IMyOffer } from "$interfaces/Applicant";

import { Detail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IDetailTranslations } from "./interface";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();
  const [ saveJobApplication ] = useMutation(SAVE_JOB_APPLICATION);

  const {
    translations,
    error: translationsError,
    loading: loadingTranslations
  } = useTranslations<IDetailTranslations>("offerDetail");

  const {
    data: { getOfferByUuid: offer } = { getOfferByUuid: {} as IMyOffer },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFER_BY_UUID, { variables: { uuid } });

  if (offerError || translationsError) return <Redirect to={RoutesBuilder.notFound} />;
  if (loadingOffer  || loadingTranslations) return <LoadingSpinner/>;

  offer.sections = sortBy(offer.sections, [ "displayOrder" ]);

  const onSubmit = async (offerUuid: string) => {
    await saveJobApplication({ variables: { offerUuid } });
    history.push(RoutesBuilder.applicant.home());
  };

  return (
    <Detail
      apply={onSubmit}
      translations={translations!}
      goToCompany={RoutesBuilder.company.detail(offer.company.id)}
      offer={offer}
    />
  );
};

export { DetailContainer };

import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useMutation, useTranslations } from "$hooks";
import { sortBy } from "lodash";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_OFFER_BY_UUID } from "$queries";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { IMyOffer } from "$interfaces/Applicant";
import { Detail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IDetailTranslations } from "./interface";
import { Redirect } from "$components/Redirect";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const saveJobApplication = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IDetailTranslations>("offerDetail");

  const {
    data: { getOfferByUuid: offer } = { getOfferByUuid: {} as IMyOffer },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFER_BY_UUID, { variables: { uuid } });

  if (offerError || translations.error) return <Redirect to={RoutesBuilder.public.notFound}/>;
  if (loadingOffer || translations.loading) return <LoadingSpinner/>;

  offer.sections = sortBy(offer.sections, ["displayOrder"]);

  const apply = async (offerUuid: string) => {
    const { error } = await saveJobApplication({
      variables: { offerUuid },
      handlers: { JobApplicationAlreadyExistsError: () => alert(translations.data.alreadyApplied) },
      update: cache => cache.writeData({ id: `Offer_${offerUuid}`, data: { hasApplied: true } })
    });
    if (!error) alert(translations.data.applySuccess);
  };

  return (
    <Detail
      apply={apply}
      translations={translations.data}
      goToCompany={RoutesBuilder.applicant.companyProfile(offer.company.uuid)}
      offer={offer}
    />
  );
};

export { DetailContainer };

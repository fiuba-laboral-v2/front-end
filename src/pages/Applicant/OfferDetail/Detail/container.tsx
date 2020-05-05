import React, { FunctionComponent } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useTranslations } from "$hooks";
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
  const [saveJobApplication] = useMutation(SAVE_JOB_APPLICATION);

  const translations = useTranslations<IDetailTranslations>("offerDetail");

  const {
    data: { getOfferByUuid: offer } = { getOfferByUuid: {} as IMyOffer },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFER_BY_UUID, { variables: { uuid } });

  if (offerError || translations.error) return <Redirect to={RoutesBuilder.notFound}/>;
  if (loadingOffer || translations.loading) return <LoadingSpinner/>;

  offer.sections = sortBy(offer.sections, ["displayOrder"]);

  const onSubmit = async (offerUuid: string) => {
    await saveJobApplication({ variables: { offerUuid } });
    history.push(RoutesBuilder.applicant.home);
  };

  return (
    <Detail
      apply={onSubmit}
      translations={translations.data}
      goToCompany={RoutesBuilder.company.detail(offer.company.uuid)}
      offer={offer}
    />
  );
};

export { DetailContainer };

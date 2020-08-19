import React, { FunctionComponent } from "react";
import { OfferDetail } from "$components/OfferDetail";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { useCompanyOfferByUuid } from "$hooks/queries";

export const OfferDetailContent: FunctionComponent<IOfferDetailContentProps> = (
  {
    offerUuid,
    scrollToTop
  }
) => {
  const response = useCompanyOfferByUuid(offerUuid);
  if (response.error || response.loading) return <LoadingSpinner/>;
  scrollToTop();
  return <OfferDetail offer={response.data.getOfferByUuid}/>;
};

interface IOfferDetailContentProps {
  offerUuid: string;
  scrollToTop: () => void;
}

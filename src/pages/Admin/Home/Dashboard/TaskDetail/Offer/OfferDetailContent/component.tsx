import React, { FunctionComponent } from "react";
import { OfferDetail } from "$components/OfferDetail";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { useOfferByUuid } from "$hooks/queries";

export const OfferDetailContent: FunctionComponent<IOfferDetailContentProps> = (
  {
    offerUuid,
    scrollToTop,
    className
  }
) => {
  const response = useOfferByUuid(offerUuid);
  if (response.error || response.loading) return <LoadingSpinner/>;
  scrollToTop();
  return <OfferDetail offer={response.data.getOfferByUuid} className={className}/>;
};

interface IOfferDetailContentProps {
  offerUuid: string;
  scrollToTop: () => void;
  className?: string;
}

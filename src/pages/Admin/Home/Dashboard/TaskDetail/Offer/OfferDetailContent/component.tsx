import React, { FunctionComponent } from "react";
import { OfferDetail } from "$components/OfferDetail";
import { useOfferByUuid } from "$hooks/queries";
import { LoadingSpinner } from "../../LoadingSpinner";

export const OfferDetailContent: FunctionComponent<IOfferDetailContentProps> = ({
  offerUuid,
  scrollToTop,
  className
}) => {
  const offer = useOfferByUuid(offerUuid).data?.getOfferByUuid;
  scrollToTop();
  return (
    <>
      {!offer && <LoadingSpinner />}
      <OfferDetail {...{ offer, className }} />
    </>
  );
};

interface IOfferDetailContentProps {
  offerUuid: string;
  scrollToTop: () => void;
  className?: string;
}
